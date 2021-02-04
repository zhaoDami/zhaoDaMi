<template>
  <div class="cont">
    <p>
      上报时间 <br /><br />
      <el-date-picker
        v-model="formData.datetime"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </p>
    <br />
    <p>
      性别 <br /><br />
      <el-select v-model="formData.choseValue" placeholder="请选择">
        <el-option
          v-for="item in sexData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </p>
    <br />
    <p>
      民族 <br /><br />
      <el-input v-model="formData.nation" style="width: 600px" />
    </p>
    <br />
    <p>
      年收入(元) <br /><br />
      <el-input type="number" v-model="formData.num" style="width: 160px">
        <el-button slot="append" disabled>元</el-button>
      </el-input>
    </p>
    <br />
    <p v-for="(item, index) in tableData" :key="index">
      <el-table :data="item.sub_fields" style="width: 100%">
        <el-table-column label="" width="180" prop="title"> </el-table-column>
        <el-table-column
          v-for="(items, index) in item.values"
          :key="index"
          :label="items"
          width="180"
        >
          <input type="radio" :name="items" id="" />
        </el-table-column>
      </el-table>
    </p>
    <br />
    <p>
      您习惯在食物和水中放糖吗 <br /><br />
      <el-radio-group v-model="formData.radio">
        <el-radio label="食物和水中放糖-是">否</el-radio>
        <el-radio label="食物和水中放糖-否">是</el-radio>
      </el-radio-group>
    </p>
    <br />
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
            <el-button type="danger" v-else @click="del(scope.row)">删除</el-button>
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
    return {
      daosiData: [
        {
          bianhao: "",
          mingcheng: "",
          inch: "",
          flag: false,
        },
      ],
      formData: {
        datetime: "",
        choseValue: "",
        nation: "",
        num: "",
        radio: "",
      },
      sexData: [
        {
          value: "man",
          label: "男",
        },
        {
          value: "woman",
          label: "女",
        },
        {
          value: "???",
          label: "不明",
        },
      ],
      tableData: [
        {
          id: "b3",
          title: "一周中,您和家人共同进餐(1人或1人以上)的次数如何",
          code: "B3",
          type: "tableRadio",
          values: {
            0: "0-1 天/周",
            1: "2-3 天/周",
            2: "4-5 天/周",
            3: "6-7 天/周",
          },
          sub_fields: [
            {
              id: "breakfast",
              type: "radio",
              title: "早餐",
              values: {
                0: "0-1 天/周",
                1: "2-3 天/周",
                2: "4-5 天/周",
                3: "6-7 天/周",
              },
              value: null,
            },
            {
              id: "lunch",
              type: "radio",
              title: "午餐",
              values: {
                0: "0-1 天/周",
                1: "2-3 天/周",
                2: "4-5 天/周",
                3: "6-7 天/周",
              },
              value: null,
            },
            {
              id: "supper",
              type: "radio",
              title: "晚餐",
              values: {
                0: "0-1 天/周",
                1: "2-3 天/周",
                2: "4-5 天/周",
                3: "6-7 天/周",
              },
              value: null,
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    add(item) {
      item.flag = true;
      this.daosiData.push({
        bianhao: "",
        mingcheng: "",
        inch: "",
        flag: false,
      });
    },
    del(items){
       let index = this.daosiData.findIndex(item => {
         return item.bianhao == items.bianhao
       })
       this.daosiData.splice(index,1)
    }
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.cont {
  padding: 20px;
  width: 100%;
  background: white;
  box-sizing: border-box;
}
</style>