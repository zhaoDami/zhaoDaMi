<template>
  <div>
    <div class="head">
      <div class="head_div">
        <p class="title">测试数据mock</p>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="head_div">
        <p class="title">评分组件</p>
        <pre>
size --- 控制每颗星星的大小，类型为string,备选值分别为
24/36/48；
score --- 传递评分的分数，类型为number
           </pre
        >
        <div v-for="(item, index) in star" :key="index">
          <i
            class="el-icon-star-on"
            v-for="(items, index) in item.s"
            :key="index"
            style="color: orange"
          ></i>
          <i
            class="el-icon-star-on"
            v-for="item in 5 - item.s"
            :key="5 - item"
          ></i>
        </div>
      </div>
    </div>
    <div class="center" style="background: white">
      <p class="title">tableRadio 组件</p>
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
    </div>

    <div class="center" style="background: white">
      <p class="title">topmenu 组件</p>
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu :index="index" v-for="(item, index) in subMenu" :key="index">
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            index="2-1"
            v-for="(items, index) in item.data"
            :key="index"
            >{{ items }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
      浙江省杭州市江干区学正街18号浙江工商大学金沙港生活区
    </div>

    <div class="center" style="background: white">
      <p class="title">病人组件</p>
      <patient></patient>
    </div>

    <div class="center" style="background: white">
      <p class="title">table 组件</p>
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
    </div>
    <div class="bottom">
      <div class="head_div">
        <p class="title">validate-code 组件</p>
        <div
          class="div"
          ref="yzmDiv"
          @click="createYzm"
          :style="`background-position: ${background_position_x}px ${background_position_y}px;`"
        >
          <span
            v-for="(item, index) in yzm.split('')"
            :key="index"
            :style="`color:${colorArr[Math.round(Math.random() * 4)]};`"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="head_div">
        <p class="title">validate-code 组件</p>
      </div>
    </div>
  </div>
</template>

<script>
import patient from "./patient"
export default {
  name: "",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      star: [
        {
          s: 3,
        },
        {
          s: 2,
        },
        {
          s: 4,
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
      daosiData: [
        {
          bianhao: "",
          mingcheng: "",
          inch: "",
          flag: false,
        },
      ],
      yzm: "abcd",
      yzmArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"],
      background_position_x: 100,
      background_position_y: 100,
      colorArr: ["red", "yellow", "blue", "green", "orange"],
      subMenu: [
        {
          title: "HTML5",
          data: ["article", "article", "article", "article"],
        },
        {
          title: "CSS",
          data: ["动画", "过度", "圆形", "边框"],
        },
        {
          title: "Jquery",
          data: ["article", "article", "article", "article"],
        },
        {
          title: "JavaScript",
          data: ["动画", "过度", "圆形", "边框"],
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
    del(items) {
      let index = this.daosiData.findIndex((item) => {
        return item.bianhao == items.bianhao;
      });
      this.daosiData.splice(index, 1);
    },
    createYzm() {
      let yzm = "";
      for (var i = 0; i < 4; i++) {
        let num = Math.round(Math.random() * 14);
        yzm += this.yzmArr[num];
      }
      this.yzm = yzm;
      this.background_position_x = Math.random() * 300;
      this.background_position_y = Math.random() * 300;
    },
  },
  computed: {},
  watch: {},
  components : {patient}
};
</script>

<style scoped lang="scss">
.title {
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.head,
.bottom {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
  .head_div {
    margin-left: 10px;
    flex: 1;
    background: white;
    padding: 10px 20px;
    border-radius: 10px;
  }
}
.div {
  width: 150px;
  letter-spacing: 15px;
  background: url("http://bpic.588ku.com//back_origin_min_pic/20/12/16/4462ee88acf8b7fa3eff78a1b3914176.jpg!/fw/750/quality/99/unsharp/true/compress/true");
  color: blue;
  line-height: 40px;
  padding: 0px 40px;
  box-sizing: border-box;
  border-radius: 10px;
}
.center {
  margin-bottom: 20px;
  border-radius: 10px;
  padding-bottom: 20px;
}
.el-submenu {
  background: #0099ff !important;
}
.el-submenu__title {
  color: white !important;
}
.el-submenu__icon-arrow .el-icon-arrow-down {
  display: none !important;
}
</style>