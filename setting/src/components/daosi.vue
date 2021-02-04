<template>
  <div>
    <p>
      导丝的使用情况 <br /><br />
      <el-table :data="daosiData" style="width: 100%">
        <el-table-column prop="date" label="编号" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.bianhao"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.mingcheng"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="直径 （单位：inch）">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.inch"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              v-if="!scope.row.flag"
              @click="add(scope.row)"
              >添加</el-button
            >
            <el-button type="danger" v-else @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
</style>