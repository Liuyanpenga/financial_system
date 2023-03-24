<template>
  <div>
    <ESearch placeholder="请输入条件" @setValue="setQuery" />
    <ESearch placeholder="请输入条件">
      <template #btn="{ query }">
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
      <template #birthday="{ row }">
        <span>{{ row.birthday | date }}</span>
      </template>

      <template #sex="{ row }">
        <span>{{ row.sex | sex }}</span>
      </template>

      <template #education="{ row }">
        <span>{{ row.education | education }}</span>
      </template>

      <template #status="{ row }">
        <el-tag :type="row.status | statusColor">{{ row.status | status }}</el-tag>
      </template>

      <template #operation="{ row }">
        <el-button type="primary" @click="showEditForm(row)">编辑</el-button>
        <el-button type="danger" @click="delEditForm(row.id)">删除</el-button>
        <el-button type="success" @click="submitEditForm(row.id)">提交审核</el-button>
      </template>
    </ETable>

    <el-dialog title="申请管理-编辑" :visible.sync="dialogVisible" @open="formVisible =true" @closed="formVisible=false" width="30%" center>
      <EForm v-if="formVisible" :config="editForm" ref="form">
        <span slot="btn"></span>
      </EForm>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { tableConfig, columns, genEditForm } from "./configData";
import { editLoanUpdate, deleteLoanForm, submitLoanForm } from "@/api/loan";
import pager from "@/mixins/pager";
import crud from "@/mixins/crud";
export default {
  name: "Manger",
  mixins: [pager, crud],
  data() {
    return {
      tableConfig,
      columns,
      tableData: [],
      dialogVisible: false,
      formVisible:false,
      editForm: {}
    };
  },
  created() {
    this.load();
  },
  methods: {
    // 开启请求 给 url
    beforeInit() {
      this.loadUrl = "/loan/list";
      return true;
    },
    // 打开对话框
    showEditForm(row) {
      // 获取编辑前表单数据
      this.editData = row;
      this.editForm = genEditForm(row);
      this.dialogVisible = true;
    },
    // edit 更新
    async saveEdit() {
      // 表单数据
      const data = this.$refs.form.getData();
      let isSave = await this.$econfirm("是否确认保存?");
      if (!isSave) return;
      // 全量更新怕数据出错，局部再更新下
      await editLoanUpdate({ ...this.editData, ...data });
      this.$message.success('保存成功');
      this.load();
      this.dialogVisible = false;
    },
    // 删除申请
    async delEditForm(id) {
      let isDel = await this.$econfirm("是否确认删除?");
      if (!isDel) return;
      await deleteLoanForm(id);
      this.$message.success('删除成功');
      this.load();
      this.dialogVisible = false;
    },
    // 提交审核
    async submitEditForm(id){
      let isSubmit = await this.$econfirm("是否确认提交?");
      if (!isSubmit) return;
      await submitLoanForm(id);
      this.$message.success('提交成功');
      this.load();
      this.dialogVisible = false;
    }
  },
};
</script>

<style scoped></style>
