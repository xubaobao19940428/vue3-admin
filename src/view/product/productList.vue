<!--  -->
<template>
  <div class="product_list app-container">
    <div class="product-list-header">
      <el-button type="primary" icon="el-icon-plus">新建商品</el-button>
      <el-form :inline="true" :model="queryData" class="demo-form-inline" label-width="80px">
        <el-form-item label="商品Id:">
          <el-input v-model="queryData.user" placeholder="商品Id"></el-input>
        </el-form-item>
        <el-form-item label="活动区域:">
          <el-select v-model="queryData.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="上架" name="first"></el-tab-pane>
        <el-tab-pane label="下架" name="second"></el-tab-pane>
        <el-tab-pane label="待审核" name="third"></el-tab-pane>
        <el-tab-pane label="审核不通过" name="fourth"></el-tab-pane>
        <el-tab-pane label="草稿" name="5"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="main-content-wrapper">
      <div class="table-detail" v-if="activeName=='first'||activeName=='second'">
        <el-table :data="tableData" border stripe style="width: 100%" height="100%" @select-change="selectChange">
           <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column prop="date" label="商品Id" width="180" align="center">
          </el-table-column>
          <el-table-column prop="name" label="商品" width="180" align="center">
          </el-table-column>
          <el-table-column prop="address" label="供货价" align="center">
          </el-table-column>
          <el-table-column prop="address" label="商家库存" align="center">
          </el-table-column>
          <el-table-column prop="address" label="预占库存" align="center">
          </el-table-column>
          <el-table-column prop="address" label="剩余可售库存" align="center">
          </el-table-column>
           <el-table-column prop="address" label="销售状态" align="center">
          </el-table-column>
           <el-table-column  label="操作" width="200" align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="pagination-box">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {
    ref,
    reactive
  } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      const object = reactive({
        foo: 'bar'
      })
      // 暴露到template中
      return {
        count,
        object
      }
    },
    data() {
      return {
        queryData: {
          user: '',
          region: ''
        },
        activeName: 'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    components: {

    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang='scss' scoped>
  .product_list {
    width: 100%;
    height: 100%;
    .product-list-header {
      .demo-form-inline {
        margin-top: 20px;
      }
    }
    .main-content-wrapper{
      .table-detail{
        height:100%;
      }
    }
  }
</style>