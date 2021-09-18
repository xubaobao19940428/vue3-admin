<!--  -->
<template>
  <div>
      {{count[0]}}
      <el-button @click="increment">加</el-button>
      <div class="progress">
        <div class="progress-detail" :style="{'width':count[0]*10>maxWidth?maxWidth+'px':count[0]*10+'px'}">

        </div>
       
      </div>
       <div id="some-element-you-want-to-animate">

        </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      count:[1],
      maxWidth:'',
    };
  },

  components: {},

  computed: {},

  mounted(){
    const element = document.getElementById('some-element-you-want-to-animate');
      let start;

      function step(timestamp) {
        if (start === undefined)
          start = timestamp;
        const elapsed = timestamp - start;
        //这里使用`Math.min()`确保元素刚好停在200px的位置。
        element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

        if (elapsed < 2000) { // 在两秒后停止动画
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    // console.log(document.getElementsByClassName('progress')[0].getClientRects())
    this.maxWidth = document.getElementsByClassName('progress')[0].getClientRects()[0].width
  },

  methods: {
    increment() {
      this.count[0]++
    }
  }
})

</script>
<style lang='scss' scoped>
.progress{
  height:10px;
  width:200px;
  background-color:#ccc;
  border-radius: 10px;
  .progress-detail{
    height:100%;
    background-color:blue;
    border-radius: 10px;
  }
}
#some-element-you-want-to-animate{
    width:10px;
    height:10px;
    background-color:red;
  }
</style>