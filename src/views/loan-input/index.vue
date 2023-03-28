<template>
  <div>
    <EForm @submit="createLoan" :config="configData" />
    <!-- <hr />
    <EForm ref="form2" :config="configData">
      <template #btn="scoped">
        <el-button @click="test2">提交{{ scoped }}</el-button>
      </template>
    </EForm> -->
  </div>
</template>

<script>
import configData from "./configData";
import {createLoanApi} from '@/api/loan'
export default {
  name:'loan-input',
  data() {
    return {
      configData,
    };
  },
  methods: {
    async createLoan(loanData) {
      await createLoanApi(loanData)
      this.$message.success('申请成功');
    },
    // test() {
    //   console.log(this.$refs.form2.getData());
    // },
  },
};
</script>

<style scoped>
</style>
