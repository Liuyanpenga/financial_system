"use strict";(self["webpackChunkfinancial_system"]=self["webpackChunkfinancial_system"]||[]).push([[531],{56531:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-form center"},[r("h1",{staticClass:"login-title t-center"},[e._v("Login")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",type:"text",placeholder:"username",autocomplete:"off"},model:{value:e.ruleForm.account,callback:function(r){e.$set(e.ruleForm,"account",r)},expression:"ruleForm.account"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-s-order",type:"password",placeholder:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")])],1),e._m(0)],1)])},o=[function(){var e=this,r=e._self._c;return r("div",{staticClass:"msg"},[e._v(" Don't have account? "),r("a",{attrs:{href:"#"}},[e._v("Sign up")])])}],n=(t(57658),t(47337)),a={mounted(){this.enterFn=e=>{13===e.keyCode&&this.submitForm()},window.addEventListener("keypress",this.enterFn)},beforeDestroy(){window.removeEventListener("keypress",this.enterFn)},data(){return{ruleForm:{account:"admin",password:"approve123456."},rules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{submitForm(){this.$refs.ruleForm.validate((async e=>{if(!e)return console.log("error submit!!"),!1;{let[e,r]=await(0,n.x4)(this.ruleForm);if(e)return;this.$router.push(this.$route.query.redirect||"/home").catch((()=>{}))}}))}}},i=a,l=t(1001),u=(0,l.Z)(i,s,o,!1,null,"65637f28",null),c=u.exports}}]);
//# sourceMappingURL=531.3ec8acc3.js.map