
import { createStore } from 'vuex'
import nav from './modules/nav'
import system from './modules/system'
import user from './modules/user'
// 创建一个新的 store 实例
const store = createStore({
    modules:{
        nav,
        system,
        user
    }
})
export default store