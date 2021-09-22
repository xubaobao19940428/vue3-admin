<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    // HelloWorld,
  },
  created(){
    this.$store.dispatch('GetUserInfo')
    this.$store.dispatch('getCountryList')
    this.$store.dispatch('getLanguageList')
    this.$store.dispatch('GetPermissionKeyMap')
  },
  mounted(){
   
  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width:100%;
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
