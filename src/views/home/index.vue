<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="6"
        :xl="6"
        v-for="(item, index) in saleInfo"
        :key="index"
      >
        <div class="grid-content" :style="{ background: item.color, height: '200px' }">
          <div class="center">
            <p v-text="item.title"></p>
            <countTo :endVal="item.val"></countTo>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 准备 DOM 初始化echarts实例 -->
    <div class="chartBox">
      <Echarts :options="chartData2" />
      <Echarts :options="chartData1" />
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import Echarts from "@/components/Echarts.vue";
export default {
  name: "Home",
  components: { countTo, Echarts },
  data() {
    return {
      saleInfo: [
        { val: 13594, title: "最高可借金额", color: "#fac1eb" },
        { val: 9833, title: "回报率", color: "#dec1eb" },
        { val: 8888, title: "业绩领跑", color: "#bfc2ed" },
        { val: 666, title: "安稳底薪战队", color: "#aac1ee" },
      ],
      chartData1: {},
      chartData2:{}
    };
  },
  created() {
    const data = [];
    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    this.chartData1 = {
      title: {
        text: "",
      },
      legend: {
        data: ["line"],
      },
      polar: {
        center: ["50%", "54%"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 0,
      },
      radiusAxis: {
        min: 0,
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
      animationDuration: 2000,
    };
    this.chartData2 =  {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    this.timer = setInterval(() => {
      let arr = [120, 132, 101, 134, 90, 230, 210]
      this.chartData2.series.forEach(s => {
        s.data = arr.map(num => {
          return  parseInt(300 * Math.random())
        })
      })
    }, 2000)

  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
};
</script>

<style scoped>
.grid-content {
  position: relative;
  color: #fff;
  font-weight: bold;
}
p {
  color: black;
  margin-bottom: 16px;
}
.chartBox {
  display:flex;
  height: 500px;justify-content: space-between;
  margin-top: 24px;
}
</style>
