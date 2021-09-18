<!--  -->
<template>
  <div class="layout">
    
    
    <!--侧边栏-->
    <div class="memall_left">
      <memall-nav :routers="routers"></memall-nav>
    </div>
    <!--路由-->
    <div class="memall_right">
      <!--头部文件-->
      <memall-header>

      </memall-header>
        <router-view class="layout_view">
            
        </router-view>
    </div>
      
  </div>
</template>

<script>
import memallHeader from './header/header.vue'
import memallNav from './nav/index.vue'
import router from '@/router/index.js'
export default {
  data () {
    return {
    };
  },

  components: {
    memallHeader,
    memallNav
  },

  computed: {
      routers(){
        let newRoute=router.getRoutes().filter(item=>{
          return item.children.length>0
        })
        return newRoute
      }
  },

  mounted(){},
  methods: {

  }
}

</script>
<style lang='scss' scoped>
.layout{
  width:100%;
  height:100%;
  display: flex;
  .memall_left{
    height:100%;
    // min-width:64px;
    // max-width:200px;
  }
  .memall_right{
    flex: 1;
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    .layout_view{
      padding:10px;
      box-sizing: border-box;
      flex:1;
    }
  }
}
</style>