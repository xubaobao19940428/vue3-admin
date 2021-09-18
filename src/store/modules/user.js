// import Vue from 'vue'
import { getToken, setToken, removeToken, setUserInfo, removeUserInfo, getCookie, getIp } from '@/utils/auth'
import { getPermissionKeys } from '@/api/pb/staff.js'
import { sysLogin } from '@/api/pb/staff.js'
import { getUserInfo } from '../../utils/auth'
let info = getUserInfo()
const user = {
    state: {
        token: getToken(),
        uid: 1,
        roles: [],
        avatar: '',
        username: '',
        groupId: '',
        permissionKey: info && info.permissionKeyMap ? info.permissionKeyMap : {},
        userLevel: {
            2: '非会员',
            3: '会员',
            4: 'pre-prime',
            9:'团长'
            // 5: '(AT)'
        }
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_PEIMISSION: (state, key) => {
            if (key) {
                state.permissionKey = key
                if (localStorage.adminUserInfo) {
                    let userInfo = JSON.parse(localStorage.adminUserInfo)
                    setUserInfo(Object.assign(userInfo, {
                        permissionKeyMap: key
                    }))
                    setUserInfo(userInfo)
                }
            }
        },
        SET_USERINFO: (state, userinfo) => {
            state.uid = userinfo.id
            state.groupId = userinfo.groupId
            state.username = userinfo.nickName
            state.avatar = userinfo.headImg
        }
    },

    actions: {
    // 登录
        Login ({ commit }, userInfo) {
            console.log('userInfo',userInfo)
            return new Promise((resolve, reject) => {
                getIp().then((ip) => {
                    sysLogin(Object.assign(userInfo, {
                        deviceId: new DeviceUUID().get(),
                        ati: getCookie('_ati'),
                        userIp: ip
                    })).then((response) => {
                        console.log(response)
                        if (response.ret.errcode === 1) {
                            commit('SET_TOKEN', response.token)
                            commit('SET_USERINFO', response)
                            commit('SET_PEIMISSION', response.permissionKeyMap)
                            setToken(response.token)
                            setUserInfo(response)
                            // Vue.prototype.$headers = { token: localStorage.getItem('adminToken') }

                            resolve(response)
                        } else {
                            reject(new Error(response.message))
                        }
                    }).catch(error => {
                        reject(error)
                    })
                })
            })
        },
        // 获取用户的拥有权限，根据组织id获取
        GetPermissionKeyMap ({ commit, state }) {
            console.log('执行')
            getPermissionKeys({}).then(res => {
                console.log(res)
                if (res.ret.errcode === 1) {
                    commit('SET_PEIMISSION', res.permissionKeyMap)
                }
            })
        },
        // 获取用户信息
        GetUserInfo ({ commit, state }) {
            const userInfo = getUserInfo()
            if (userInfo) {
                if (!userInfo.roles) {
                    userInfo['roles'] = []
                }
                commit('SET_USERINFO', userInfo)
            }
            return userInfo
        },

        // 登出
        LogOut ({ commit, state }, userinfo) {
            commit('SET_PEIMISSION', [])
            commit('SET_TOKEN', '')
            commit('SET_USERINFO', {})
            removeToken()
            removeUserInfo()
        },
    }
}

export default user
