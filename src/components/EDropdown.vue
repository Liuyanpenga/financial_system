<template>
  <!-- v-bind="$attrs" 传递数据 v-on="$listeners" 传递事件-->
  <el-dropdown @command="$emit('command',$event)" v-bind="$attrs">
    <span v-text="title"></span>
    <el-dropdown-menu slot="dropdown" v-for="(item,index) in items" :key="index">
      <el-dropdown-item :command="item.key" :icon=" item.icon ">{{ item.text }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "EDropdown",
  props: {
    title: String,
    items:Array
  },
};
</script>

<style scoped></style>
