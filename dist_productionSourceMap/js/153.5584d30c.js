"use strict";(self["webpackChunkfinancial_system"]=self["webpackChunkfinancial_system"]||[]).push([[153],{79153:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var a=function(){var e=this,r=e._self._c;return r("EForm",{ref:"form",attrs:{config:e.configData},scopedSlots:e._u([{key:"btn",fn:function(){return[r("el-button",{attrs:{type:"danger"},on:{click:e.resetForm}},[e._v("重置")]),r("el-button",{attrs:{type:"primary"},on:{click:e.createRole}},[e._v("创建人员")])]},proxy:!0}])})},s=[],o=t(47337),l=t(567),n={items:Object.freeze([[{label:"用户名",key:"account",type:l.lD}],[{label:"密码",key:"password",type:l.Qj}],[{label:"密码",key:"confirmPwd",type:l.Qj}],[{label:"权限分配",key:"role_id",type:l.Hc,value:"2",colSpan:8,radios:[{label:"2",title:"销售人员"},{label:"1",title:"初审人员"}]}]]),rules:{account:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"}],confirmPwd:[{trigger:"blur"},{required:!0,message:"请确认密码"}],role_id:[{required:!0}]}},i={data(){return{configData:n}},created(){this.configData.rules.confirmPwd[0].validator=function(e,r,t){""===r?t(new Error("请再次输入密码")):r!==this.ruleForm.password?t(new Error("两次输入密码不一致!")):t()}},methods:{createRole(){this.$refs.form.valid((async e=>{delete e.confirmPwd,await(0,o.NH)(e),this.$message.success("创建成功")}))},resetForm(){this.$refs.form.resetForm()}}},c=i,u=t(1001),f=(0,u.Z)(c,a,s,!1,null,"3d91a93b",null),d=f.exports}}]);