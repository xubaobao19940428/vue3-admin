import router from "@/router";
import {ElMessage} from "element-plus"
// import store from "@/store";
import { param } from "@/utils";

import axios from 'axios'
const md5 =require('js-md5')
const BASE = process.env.VUE_APP_NEW_JSON_API + "proxy/";
// const BASE = 'https://gateway.mehome.shop/proxy/'
const httpService = axios.create({
    timeout: 45000,
});
function getMd5(headers_config, url_config,secret) {
    let signData = {};
    Object.assign(signData, headers_config, url_config);
    const _url_ =
        param(
            Object.keys(signData)
                .sort()
                .reduce((a, v) => {
                    a[v] = signData[v];
                    return a;
                }, {})
        ) + `&appsecret=${secret}`;

    return md5(_url_);
}
/**
 * @param {*} method get post
 * @param {*} serverName 服务名称
 * @param {*} interfaceName 接口名称
 * @param {*} data 入参
 * @param {*} $header 额外请求头
 * @param {*} baseUrl 请求地址
 * @param {*} versionCode api版本
 * @param {*} group 用户群组
 */
function request({
    method,
    serverName,
    methodName,
    interfaceName,
    data,
    $header,
    baseUrl,
    versionCode,
    group
}){
    let secret='jKgOjkDm3HMJJkZA'
    const headersConfig = {
        "X-Language-Code": "cn",
        "X-Country-Code": "CN",
        "X-Version-Code": versionCode || "1.0.0",
        "X-Device-Id": new DeviceUUID().get(),
        "X-Auth-Token": localStorage.getItem("adminToken") || "",
        "X-Timestamp": new Date().getTime(),
        "X-Appkey": "1004",
    };
    const urlConfig = {
        api: interfaceName,
        method: methodName,
        version: versionCode || "1.0.0",
        group: group || "memall",
    };
    headersConfig["X-sign"] = getMd5(headersConfig, urlConfig,secret);
    return httpService({
        baseURL: baseUrl ? baseUrl : `${BASE}${serverName}?${param(urlConfig)}`,
        method: method || "post",
        data: data,
        headers: Object.assign(headersConfig, $header),
    }).then((res) => {
            if (res.status !== 200) {
                const err = new Error("服务器异常");
                throw err;
            }
            let result = res.data;
            if (result.resultCode.code == "200") {
                return result.data;
            } else {
                if (result.resultCode.code == 401) {
                    if (localStorage.getItem("adminToken")) {
                        ElMessage.warning(
                            `ErrorMsg: ${error.message}, ErrorCode: ${error.code}`
                        );
                    }
                    localStorage.clear();
                    router.push({
                        name: "login",
                    });
                } else {
                    ElMessage.error(`ErrorMsg: ${result.resultCode.message}, ErrorCode: ${result.resultCode.code}`);
                }
            }
        })
        .catch((err) => {
            return err;
        });
}

export default request;
