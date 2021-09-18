<!--  -->
<template>
    <div class="memall_nav">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
        <el-menu
            unique-opened
            class="el-menu-vertical-demo"
            :default-active="activePath"
            :collapse="isCollapse"
            text-color="#ffffff"
            active-text-color="#409EFF"
            background-color="#23463e"
        >
            <el-submenu
                v-for="(item,index) in routers"
                :key="index+'_'+item.meta.title"
                :index="item.path"
            >
                <template #title>
                    <i
                        v-if="item.meta.icon"
                        class="iconfont"
                        v-html="item.meta.icon"
                    ></i>
                <!--这里和element2不同,在2里面会自动加上-->
                   <span>{{item.meta.title}}</span> 
                </template>
                <div
                    v-for="(childRoute,idx) in item.children"
                    :key="idx+'_'+item.meta.title"
                >
                    
                    <el-menu-item
                        v-if="!childRoute.hidden"
                        :index="item.path+'/'+childRoute.path"
                        :key="item.path+'/'+childRoute.path"
                    >
                     <router-link 
                        :to="item.path+'/'+childRoute.path"
                        :key="item.path+'/'+childRoute.path">
                        <i
                        v-if="childRoute.meta.icon"
                        class="iconfont"
                        v-html="childRoute.meta.icon"
                    ></i>
                        <span>{{ childRoute.meta.title }}</span>
                    </router-link>
                        <!-- {{childRoute.meta.title}} -->
                    </el-menu-item>
                </div>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "memallNav",
  props: {
    routers: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    ...mapState({
      isCollapse: (state) => state.nav.isCollapse,
    }),
     activePath () {
        return this.$route.path
    },
  },

  mounted() {
    
  },

  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    gotoUrl(route) {
      this.$router.push({
        path: route.path,
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.memall_nav {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 201px;
  height: 100%;
}
.el-menu-vertical-demo {
  height: 100%;
  i {
    color: #fff;
    margin-right: 20px;
    font-size: 18px;
  }
  .el-menu-item{
      a{
          width:100%;
          height:100%;
          display: block;
      }
  }
}
</style>