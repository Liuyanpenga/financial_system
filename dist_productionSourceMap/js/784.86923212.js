"use strict";(self["webpackChunkfinancial_system"]=self["webpackChunkfinancial_system"]||[]).push([[784],{15784:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e._self._c;return t("div",[t("ESearch",{attrs:{placeholder:"请输入姓名"},on:{setValue:e.setQuery}}),t("ETable",{attrs:{usePage:"",pager:e.frontPager,data:e.tableData,border:"",columns:e.columns,config:e.tableConfig},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange},scopedSlots:e._u([{key:"birthday",fn:function({row:a}){return[t("span",[e._v(e._s(e._f("date")(a.birthday)))])]}},{key:"operation",fn:function({row:a}){return[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showEditForm(a)}}},[e._v("查看")]),t("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitEditForm(a.id)}}},[e._v("通过")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.rejectLoan(a.id)}}},[e._v("拒绝")])]}}])}),t("el-dialog",{attrs:{visible:e.dialogVisible,width:"30%",center:"","before-close":e.doClose},on:{"update:visible":function(t){e.dialogVisible=t},open:function(t){e.formVisible=!0},closed:function(t){e.formVisible=!1}}},[t("p",{attrs:{slot:"title"},slot:"title"},[e._v("终审审批-查看详情")]),e.formVisible?t("EForm",{ref:"form1",attrs:{config:e.editForm}},[t("span",{attrs:{slot:"btn"},slot:"btn"})]):e._e(),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},n=[],i=a(55017),o=a(54011),s=a(28905),l=a(34525),u={mixins:[s.Z,l.Z],data(){return{tableConfig:i.Sp,columns:i.zF,dialogVisible:!1,editForm:null,formVisible:!1,tableData:[]}},created(){this.load()},methods:{doClose(){this.dialogVisible=!1},beforeInit(){return this.loadUrl="/approve/end/list",!0},async submitEditForm(e){let t=await this.$econfirm("是否确定通过?");t&&(await(0,o.rX)(e),this.$message.success("提交成功"),this.load())},async rejectLoan(e){let t=await this.$econfirm("是否确定拒绝?");t&&(await(0,o.i0)(e),this.$message.success("拒绝成功"),this.load())},async showEditForm(e){const t=await(0,o.SD)(e.id);this.editForm=Object.freeze((0,i.tx)(t.data.data)),this.dialogVisible=!0}}},d=u,c=a(1001),p=(0,c.Z)(d,r,n,!1,null,null,null),f=p.exports},54011:function(e,t,a){a.d(t,{AK:function(){return l},Bo:function(){return i},Pv:function(){return b},QA:function(){return n},SD:function(){return d},YB:function(){return h},ey:function(){return u},i0:function(){return p},pV:function(){return s},q3:function(){return o},rX:function(){return c},tn:function(){return f}});var r=a(2032);const n=e=>r.Z.post("/loan/create",e,{fullLoading:!0}),i=e=>r.Z.put("/loan/update",e),o=e=>r.Z["delete"]("/loan/delete/"+e),s=e=>r.Z.post("/loan/submitToApprove/",{id:e}),l=(e,t)=>r.Z.post("/approve/first/pass",{appId:e,loanId:t}),u=e=>r.Z.post("/approve/first/reject",{appId:e}),d=e=>r.Z.get("/loan/query?id="+e),c=e=>r.Z.post("/approve/end/pass",{appId:e}),p=e=>r.Z.post("/approve/end/reject",{appId:e}),f=e=>r.Z.post("/contract/createFile",{id:e}),h=e=>r.Z.get(`/contract/download?id=${e}`),b=e=>(0,r.Z)({url:e,responseType:"blob"})},34525:function(e,t,a){var r=a(2032);t["Z"]={data(){return{showLoading:!1}},methods:{beforeInit(){return!1},async load(){if(!this.beforeInit())return;this.showLoading=!0;let e=await(0,r.Z)(this.loadUrl,{params:this.apiPager});this.showLoading=!1,this.tableData=e.data.data,this.setTotal(e.data.pager.rows)}}}},28905:function(e,t,a){var r=a(42325);t["Z"]={data(){return{pager:{currentPage:1,pageSizes:[10,20,30,40],pageSize:10,layout:"total, sizes, prev, pager, next, jumper",total:100,query:""}}},methods:{handleSizeChange(e){this.pager.pageSize=e,this.pager.currentPage=1,this.load()},handleCurrentChange(e){this.pager.currentPage=e,this.load()},setTotal(e){this.pager.total=e},setQuery(e){this.pager.query=e,this.pager.currentPage=1,this.load()}},computed:{frontPager(){return(0,r.I8)(this.$data.pager)},apiPager(){let e={pageNo:this.pager.currentPage,pageSize:this.pager.pageSize};return this.pager.query&&""!==this.pager.query.trim()&&(e.name=this.pager.query),e}}}},55017:function(e,t,a){a.d(t,{Sp:function(){return o},tx:function(){return i},zF:function(){return s}});var r=a(567),n=a(36369);const i=function(e){let t=n["default"].filter.bind(n["default"]);return{items:[[{label:"id",value:e.id,key:"id"}],[{label:"姓名",value:e.name,key:"name"}],[{label:"性别",value:t("sex")(e.sex),key:"sex"}],[{label:"地址",value:e.address1,key:"address1"}],[{label:"身份证",value:e.identity_card,key:"identity_card"}],[{label:"手机号",value:e.mobile_phone,key:"mobile_phone"}],[{label:"教育程度",value:t("education")(e.education),key:"education"}],[{label:"出生日期",value:t("date")(e.birthday),key:"birthday"}]].map((e=>(e[0].type=r.lD,e[0].attrs={disabled:!0},e[0].colSpan=22,e)))}},o=Object.freeze({}),s=Object.freeze([{prop:"birthday",label:"出生日期",width:400},{prop:"name",label:"姓名",width:400},{label:"身份证",prop:"identity_card",width:400},{label:"操作",prop:"operation"}].map((e=>({...e,align:"center"}))))}}]);