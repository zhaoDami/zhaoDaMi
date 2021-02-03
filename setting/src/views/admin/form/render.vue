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
      {{ item.title }} <br /><br />
      
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      formData: {
        datetime: "",
        choseValue: "",
        nation: "",
        num: "",
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
  methods: {},
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