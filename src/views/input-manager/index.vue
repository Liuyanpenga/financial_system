<template>
  <ETable :data="tableData" :columns="columns" :config="tableConfig" border>
    <template #operation="{ scope }">
      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </template>
  </ETable>
</template>

<script>
import { tableConfig, columns, tableData } from "./configData";
export default {
  name: "Manger",
  data() {
    return {
      tableConfig,
      columns,
      tableData,
    };
  },
};
</script>

<style scoped></style>
