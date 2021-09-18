const TokenKey = 'adminToken'
const UserInfoKey = 'adminUserInfo'

export function getToken () {
    return localStorage.getItem(TokenKey)
}

export function setToken (token) {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
    return localStorage.removeItem(TokenKey)
}

export function getUserInfo () {
    return JSON.parse(localStorage.getItem(UserInfoKey))
}
export function setUserInfo (userInfo) {
    return localStorage.setItem(UserInfoKey, JSON.stringify(userInfo))
}

export function removeUserInfo () {
    return localStorage.removeItem(UserInfoKey)
}
export function getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ''
}
export function getIp () {
    return new Promise((resolve, reject) => {
        if (window.returnCitySN) {
            resolve(window.returnCitySN['cip'])
        } else {
            window.axios.get('https://ipapi.co/json/')
                .then(function (response) {
                    if (response.status == 200) {
                        resolve(response.data.ip)
                    } else {
                        response('')
                    }
                }).catch(() => {
                    resolve('')
                })
        }
    })
}
