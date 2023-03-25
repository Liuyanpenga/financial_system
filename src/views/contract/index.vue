<template>
  <div>
    <ESearch placeholder="请输入姓名" @setValue="setQuery" />

    <ETable
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      usePage
      :pager="frontPager"
      :data="tableData"
      border
      :columns="columns"
      :config="tableConfig"
    >
      <template #status="{ row }">
        <el-tag :type="row.status | statusColor">{{ row.status | status }}</el-tag>
      </template>
      <template #operation="{ row }">
        <el-button type="primary" :disabled="row.status !== 5" @click="createFile(row.id)">生成合同</el-button>
        <el-button type="success" :disabled="row.status !== 7" @click="downloadFile(row.id)">下载合同</el-button>
      </template>
    </ETable>
  </div>
</template>

<script>
import crud from "@/mixins/crud";
import pager from "@/mixins/pager";
import { allDownloadFile } from '@/utils/index'
import { columns, tableConfig } from "./configData";
import { createContractFile, downloadContractFile, createBlob } from '@/api/loan'
export default {
  mixins: [pager, crud],
  data() {
    return {
      columns,
      tableConfig,
      tableData: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    beforeInit() {
      this.loadUrl = "/contract/list";
      return true;
    },
    async createFile(id){
      await createContractFile(id)
      this.$message.success("生成合同成功");
      this.load()
    },
    async downloadFile(id){
      let res =  await downloadContractFile(id)
      if(!res?.data?.data?.url) throw new Error("无法获取Url");
      const downloadUrl = res?.data?.data?.url.replace('/api','')
      let resBlob = await createBlob(downloadUrl)
      allDownloadFile(resBlob.data,`贷款合同.docx`)
      this.$message.success("下载合同成功");
    }
  },
};
</script>

<style></style>
