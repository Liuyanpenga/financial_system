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
      <template #birthday="{ row }">
        <span>{{ row.birthday | date }}</span>
      </template>
      <template #operation="{ row }">
        <el-button type="primary" @click="showEditForm(row)">查看</el-button>
        <el-button type="success" @click="submitEditForm(row.id)">通过</el-button>
        <el-button type="danger" @click="rejectLoan(row.id)">拒绝</el-button>
      </template>
    </ETable>

    <el-dialog
      :visible.sync="dialogVisible"
      @open="formVisible = true"
      @closed="formVisible = false"
      width="30%"
      center
      :before-close="doClose"
    >
      <p slot="title">初审审批-查看详情</p>
      <EForm ref="form1" v-if="formVisible" :config="editForm">
        <span slot="btn"></span>
      </EForm>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import crud from "@/mixins/crud";
import pager from "@/mixins/pager";
import { passLoan, rejectLoan } from "@/api/loan";
import { columns, tableConfig, genEditForm } from "./configData.js";

export default {
  mixins: [pager, crud],
  data() {
    return {
      tableConfig,
      columns,
      dialogVisible: false,
      editForm: null,
      formVisible: false,
      tableData: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    doClose() {
      this.dialogVisible = false;
    },
    beforeInit() {
      this.loadUrl = "/approve/first/list";
      return true;
    },
    async submitEditForm(id) {
      let isSubmit = await this.$econfirm("是否确定通过?");
      if (!isSubmit) return;
      await passLoan(id, id);
      this.$message.success("提交成功");
      this.load();
    },
    async rejectLoan(id) {
      let isReject = await this.$econfirm("是否确定拒绝?");
      if (!isReject) return;
      await rejectLoan(id);
      this.$message.success("拒绝成功");
      this.load();
    },
    showEditForm(row) {
      this.editForm = Object.freeze(genEditForm(row));
      this.dialogVisible = true;
    },
  },
};
</script>

<style></style>
