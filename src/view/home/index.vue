<!--  -->
<template>
  <div class="memall_welcome">
       <div>vue3-admin</div>
  </div>
</template>

<script>
import {test} from '@/api/newJson/index.js'
export default {
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  mounted(){
    this.getTest()
  },

  methods: {
    getTest(){
      test({
        pageSize:20,
        pageNum:1,
      }).then(res=>{
        console.log(res)
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.memall_welcome{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:40px;
}
</style>