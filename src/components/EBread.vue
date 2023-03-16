<template>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item v-for="(route, index) in breads" :key="route.path">
      <!-- 最后一个元素 就是span {{ route?.meta?.title }}  -->
      <span v-if="breads.length === index + 1">{{ route?.meta?.title }}</span>
      <router-link v-else :to="route">{{ route?.meta?.title }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "EBread",
  created() {
    // console.log(this.$route.matched);
  },
  computed: {
    breads() {
      return this.$route.matched.filter((r) => r?.meta?.title);
    },
  },
};
</script>

<style scoped>
span,a{
  color: #c9c6c7;
}
</style>
