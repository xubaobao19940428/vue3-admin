import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from './router'
import App from './App.vue'
import store from './store/index'
import './style/index.scss'
import globalMethods from './js/common/globalMethod';
  
const app = createApp(App)

Object.keys(globalMethods).forEach(key => {
    app.config.globalProperties[key] = globalMethods[key]
})

  app.use(store).use(router)
  router.isReady().then(() => app.mount( '#app '))
  app.use(ElementPlus,{locale})
  // app.mount('#app')

