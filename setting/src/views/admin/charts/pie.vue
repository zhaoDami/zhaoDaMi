<template>
  <div>
    <div class="topChart">
      <div>
        <p class="title">网站访客来源分析</p>
        <div id="topChart" style="width: 1000px; height: 500px"></div>
      </div>
    </div>
    <div class="centerChart">
        <div>
          <p class="title">某站点用户访问来源（纯属虚构）</p>
          <div id="leftChart" style="width: 600px; height: 600px"></div>
        </div>
        <div>
          <p class="title">未来一周天气变化</p>
          <div id="rightChart" style="width: 600px; height: 600px"></div>
        </div>
      </div>

      <div class="bottomChart">
      <div>
        <p class="title">网站访客来源分析</p>
        <div id="bottomChart" style="width: 1000px; height: 500px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      option4: {
        title: {
          text: "某站点用户访问来源",
          left: "20px",
          top: "10px",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他",
          ],
          left: "20px",
          orient: "vertical",
          top: "50px",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1548, name: "搜索引擎" },
              { value: 775, name: "直达" },
              { value: 679, name: "营销广告", selected: true },
            ],
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 1048, name: "百度" },
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 251, name: "谷歌" },
              { value: 234, name: "联盟广告" },
              { value: 147, name: "必应" },
              { value: 135, name: "视频广告" },
              { value: 102, name: "其他" },
            ],
          },
        ],
      },
      option: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      option2: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      },
      option3 : {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 40, name: 'rose 1'},
                {value: 33, name: 'rose 2'},
                {value: 28, name: 'rose 3'},
                {value: 22, name: 'rose 4'},
                {value: 20, name: 'rose 5'},
                {value: 15, name: 'rose 6'},
                {value: 12, name: 'rose 7'},
                {value: 10, name: 'rose 8'}
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            data: [
                {value: 30, name: 'rose 1'},
                {value: 28, name: 'rose 2'},
                {value: 26, name: 'rose 3'},
                {value: 24, name: 'rose 4'},
                {value: 22, name: 'rose 5'},
                {value: 20, name: 'rose 6'},
                {value: 18, name: 'rose 7'},
                {value: 16, name: 'rose 8'}
            ]
        }
    ]
},
    };
  },
  mounted() {
    this.Chart();
  },
  methods: {
    Chart() {
      var chartDom = document.getElementById("topChart");
      var myChart4 = this.$echats.init(chartDom);
      this.option4 && myChart4.setOption(this.option4);

      var chartDom = document.getElementById("leftChart");
      var myChart = this.$echats.init(chartDom);
      this.option && myChart.setOption(this.option);

      var chartDom2 = document.getElementById("rightChart");
      var myChart2 = this.$echats.init(chartDom2);
      this.option2 && myChart2.setOption(this.option2);

      var chartDom3 = document.getElementById("bottomChart");
      var myChart3 = this.$echats.init(chartDom3);
      this.option3 && myChart3.setOption(this.option3);
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.title {
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.topChart {
  background: white;
  border-radius: 20px;
  margin-bottom: 20px;
}
.centerChart {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  div {
    background: white;
    border-radius: 20px;
  }
}
.bottomChart{
  background: white;
  border-radius: 20px;
}
</style>