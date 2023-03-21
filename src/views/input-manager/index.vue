<template>
  <ETable :data="tableData" :columns="columns" :config="tableConfig" border>
    <template #operation="{ scope }">
      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
      <el-button type="success">提交审核</el-button>
    </template>
  </ETable>
</template>

<script>
import { tableConfig, columns } from "./configData";
import { getLoanList } from "@/api/loan";
let pager = {
  // 页码
  pageNo:1,
  // 条数
  pageSize:10,
  // 查询条件
  // name:name
}
export default {
  name: "Manger",
  data() {
    return {
      tableConfig,
      columns,
      tableData:[],
    };
  },
  async created() {
    let res = await getLoanList(pager)
    this.tableData = res.data.data
  },
};
</script>

<style scoped></style>
