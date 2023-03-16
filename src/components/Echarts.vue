<template>
  <div :style="{ width: '50%' }" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Echarts",
  props: {
    options: {
      type: Object,
      require: true,
    },
  },
  methods: {
    renderChart() {
      // 存放业务
      // 清空之前的
      this.chart.clear();
      this.options && this.chart.setOption(this.options);
    },
  },
  watch: {
    // 监视图表变化
    options: {
      deep: true,
      handler() {
        // console.log('图表更新了')
        this.renderChart();
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = echarts.init(this.$refs.chart);
      this.renderChart();
      // 改变图表尺寸
      this.chartResize = () => {
        this.chart.resize();
      };
      // 绑定 resize 事件
      window.addEventListener("resize", this.chartResize);
    });
  },
  beforeDestroy() {
    // 清除事件 释放资源
    window.removeEventListener("resize", this.chartResize);
    this.chart.dispose();
  },
};
</script>

<style scoped></style>
