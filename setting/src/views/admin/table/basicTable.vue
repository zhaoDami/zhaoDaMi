<template>
  <div class="content">
    <div class="title">基本表格 (包含自定义模板,filter,分页组件)</div>
    <div class="content-item">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="name" label="头像">
          <template slot-scope="scope">
            <img
              :src="scope.row.avatar"
              alt=""
              style="width: 50px; border-raidus: 50%"
            />
          </template>
        </el-table-column>
        <el-table-column label="评分">
          <template slot-scope="scope">
            <i
              class="el-icon-star-on"
              v-for="(item, index) in scope.row.score"
              :key="index"
              :style="`color: orange;`"
            ></i>
            <i
              class="el-icon-star-on"
              v-for="(item, index) in 5 - scope.row.score"
              :key="5-index"
            ></i>
          </template>
        </el-table-column>
        <el-table-column label="评价类型">
          <template slot-scope="scope">
            <span v-if="scope.row.score <= 3"> 不满意</span>
            <span v-else>满意</span>
          </template>
        </el-table-column>
        <el-table-column label="送达时间" width="100px">
          <template slot-scope="scope">
            {{ new Date(scope.row.rateTime).toLocaleString().substring(0, 9) }}
          </template>
        </el-table-column>
        <el-table-column prop="text" label="内容"> </el-table-column>
        <el-table-column label="推荐">
          <template slot-scope="scope">
            <el-tag v-for="(item, index) in scope.row.recommend" :key="index">{{
              item
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="评价时间">
          <template slot-scope="scope">
            {{ new Date(scope.row.rateTime).toLocaleString() }}
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      pageSize: 5,
      page: 1,
      // split(pageSize * page - page,page)
      totals: 0,
      tableData: [],
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    //   每页显示
    handleSizeChange(pagesize) {
        this.pageSize = pagesize;
         this.getTableData();
    },
    // 页码改变
    handleCurrentChange(page) {
        console.log(page)
        this.page = page;
        this.getTableData()
    },
    // 获取表单数据
    async getTableData() {
      let { data } = await this.$axios.get("/json/tabList.json");
      this.totals = data.total;
      this.tableData = data.table.splice((this.pageSize * this.page) - this.pageSize,this.pageSize);
      console.log(data);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background: white;
  .title {
    width: 100%;
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
  }
  .content-item {
    padding: 20px;
    .el-table {
      text-align: center;
    }
  }
  .page {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }
}
</style>