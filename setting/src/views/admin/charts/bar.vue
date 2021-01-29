<template>
  <div>
    <div class="topChart">
      <p class="title">某周网站访客来源分析</p>
      <div id="main" style="width: 1200px; height: 500px"></div>
    </div>
    <div class="centerChart">
      <div>
        <p class="title">某周网站访客来源趋势图</p>
        <div
          class="leftChart"
          id="leftChart"
          style="width: 600px; height: 500px"
        ></div>
      </div>
      <div>
        <p class="title">未来一周天气变化</p>
        <div
          class="rightChart"
          id="rightChart"
          style="width: 600px; height: 500px"
        ></div>
      </div>
    </div>
    <div class="bottomChart">
      <p class="title">世界人口总量(数据来自网络)</p>
      <div id="bottomChart" style="width: 1200px; height: 500px"></div>
    </div>
  </div>
</template>

<script>
var xAxisData = [0, 500, 1000, 1500, 2000, 2500, 3000];

var emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: "rgba(0,0,0,0.3)",
  },
};
export default {
  name: "",
  data() {
    return {
      option: {
        legend: {
          data: ["直接访问", "邮件营销", "联盟广告", "搜索引擎"],
          left: "10%",
        },
        brush: {
          toolbox: ["rect", "polygon", "lineX", "lineY", "clear"],
          xAxisIndex: 0,
        },
        toolbox: {
          feature: {
            dataView: {},
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        xAxis: {
          data: xAxisData,
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        series: [],
      },
      option2: {
        
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["蒸发量", "降水量"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        xAxis: {
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
        toolbox: {
          feature: {
            dataView: {},
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
      },
      option3: {
        toolbox: {
          feature: {
            dataView: {},
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["利润", "支出", "收入"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
          },
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        series: [],
      },
      option4: {
        toolbox: {
          feature: {
            dataView: {},
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2011年", "2012年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      },
      myChart: null,
      myChart2: null,
      myChart3: null,
      myChart4: null,
    };
  },
  async mounted() {
    await this.getBarData();
    this.topChart();
    this.cLeftChart();
    this.cRightChart();
    this.botChart();
  },
  methods: {
    //   改变表格
    renderBrushed(params) {
      var brushed = [];
      var brushComponent = params.batch[0];

      for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push("[Series " + sIdx + "] " + rawIndices.join(", "));
      }

      this.myChart.setOption({
        title: {
          backgroundColor: "#333",
          text: "SELECTED DATA INDICES: \n" + brushed.join("\n"),
          bottom: 0,
          right: "10%",
          width: 100,
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
      });
    },
    // 头部柱状图
    topChart() {
      var chartDom = document.getElementById("main");
      this.myChart = this.$echats.init(chartDom);
      this.myChart.on("brushSelected", this.renderBrushed);
      this.option && this.myChart.setOption(this.option);
    },
    cLeftChart() {
      var chartDom = document.getElementById("leftChart");
      this.myChart2 = this.$echats.init(chartDom);
      this.option2 && this.myChart2.setOption(this.option2);
    },
    cRightChart() {
      var chartDom = document.getElementById("rightChart");
      this.myChart3 = this.$echats.init(chartDom);
      this.option3 && this.myChart3.setOption(this.option3);
    },
    botChart() {
      var chartDom = document.getElementById("bottomChart");
      this.myChart4 = this.$echats.init(chartDom);
      this.option4 && this.myChart4.setOption(this.option4);
    },
    // 获取表格数据
    async getBarData() {
      let { data } = await this.$axios.get("/json/getBarData.json");
      this.optionsA = data.optionsA;
      this.optionsB = data.optionsB;
      this.optionsC = data.optionsC;

      this.optionsA.series.forEach((item) => {
        item.type = "bar";
        item.stack = "total";
        item.emphasis = emphasisStyle;
        item.label = {
          show: true,
        };
      });
      this.optionsB.series.forEach((item) => {
        item.type = "line";
        item.stack = "总量";
        item.name
      });
      this.optionsC.series.forEach((item) => {
        item.type = "bar";
        item.stack = "总量";
        item.label = {
          show: true,
          position: "left",
        };
        item.emphasis = {
          focus: "series",
        };
      });
      this.option.series = this.optionsA.series;
      this.option2.series = this.optionsB.series;
      this.option3.series = this.optionsC.series;
      console.log(this.option.series);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.topChart {
  width: 100%;
  background: white;
  margin-bottom: 20px;
  border-radius: 15px;
}
.title {
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.centerChart {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  div {
    background: white;
    border-radius: 15px;
  }
}
.bottomChart {
  background: white;
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>