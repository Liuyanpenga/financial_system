<template>
  <div>
    <!-- 判断是否有孩子 -->
    <el-menu-item v-if="item.nonRenderChild || !item.children" :index="item.path">
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <EMenu v-for="it in item.children" :item="it" :key="it.path" />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "EMenu",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped></style>
