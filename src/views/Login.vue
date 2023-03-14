<template>
  <div class="login-container">
    <div class="login-form center">
      <h1 class="login-title t-center">Login</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="account">
          <el-input prefix-icon="el-icon-user-solid" type="text" placeholder="username" v-model="ruleForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-s-order" type="password" placeholder="password" v-model="ruleForm.password" autocomplete="off"></el-input>
       </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form>
      <div class="msg">
        Don't have account?
        <a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
export default {
  mounted(){
    this.enterFn=(e) => {
      if(e.keyCode===13){
        this.submitForm()
      }
    }
    window.addEventListener('keypress',this.enterFn)
  },
  beforeDestroy(){
    window.removeEventListener('keypress',this.enterFn)
  },
  data() {
    return {
      ruleForm: {
        account: "admin",
        password: "approve123456.",
      },
      rules: {
        account: [{ required: true, trigger: "blur",message: '请输入用户名' }],
        password: [{ required: true, trigger: "blur",message: '请输入密码' }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let [err,res] = await login(this.ruleForm)
          if(err) return;
          // 登录后跳转到没登录前访问的菜单页面
          this.$router.push(this.$route.query.redirect || '/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-form {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
}
.login-title {
  font-size: 38px;
  font-weight: bold;
  line-height: 200px;
}
.el-button {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 30px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.el-input {
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
:deep(.el-input__inner) {
  border: none;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
