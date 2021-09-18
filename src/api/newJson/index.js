import request from "../request";

export function test(data){
    return request({
        serverName:'littlec-erp',
        interfaceName:'shop.memall.erp.boss.IOutOrderJsonService',
        methodName:'checkOut',
        data:data,
    })
}