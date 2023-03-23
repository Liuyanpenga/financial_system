<template>
  <div>
    <ESearch placeholder="请输入条件" @setValue="setQuery" />
    <ESearch placeholder="请输入条件" >
      <template #btn="{query}">
        <el-button type="primary" @click="setQuery(query)">查询</el-button>
      </template>
    </ESearch>

    <ETable
      border
      usePage
      :pager="frontPager"
      :data="tableData"
      :columns="columns"
      :config="tableConfig"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <template #operation="{ scope }">
        <el-button type="primary">编辑</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="success">提交审核</el-button>
      </template>
    </ETable>
  </div>
</template>

<script>
import { tableConfig, columns } from "./configData";
import pager from '@/mixins/pager'
import crud from '@/mixins/crud'
export default {
  name: "Manger",
  mixins:[pager,crud],
  data() {
    return {
      tableConfig,
      columns,
      tableData: [],
    };
  },
  created() {
    this.load()
  },
  methods: {
    beforeInit(){
      this.loadUrl = '/loan/list'
      return true
    }
  },
};
</script>

<style scoped></style>
