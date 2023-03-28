<template>
  <EForm ref="form" :config="configData">
    <template #btn>
      <el-button type="danger" @click="resetForm">重置</el-button>
      <el-button type="primary" @click="createRole">创建人员</el-button>
    </template>
  </EForm>
</template>

<script>
import { doCreateRole } from "@/api/user";
import configData from "./configData";
export default {
  data() {
    return {
      configData,
    };
  },
  created() {
    // 确定密码校验 局部方法销毁后再执行可重新 bind 而同全局方法不可二次 bind
    this.configData.rules.confirmPwd[0].validator = function (rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
  },
  methods: {
    createRole() {
      this.$refs.form.valid(async (data) => {
        delete data.confirmPwd;
        await doCreateRole(data);
        this.$message.success('创建成功')
      });
    },
    resetForm() {
      this.$refs.form.resetForm();
    },
  },
};
</script>

<style scoped></style>
