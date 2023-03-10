<template>
  <div class="login-container">
    <div class="login-form center">
      <h1 class="login-title t-center">Login</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-input
          prefix-icon="el-icon-user-solid"
          type="text"
          placeholder="username"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
        <el-input
          prefix-icon="el-icon-s-order"
          type="password"
          placeholder="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
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
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "admin",
        password: "approve123456.",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
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
  margin-bottom: 16px;
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
