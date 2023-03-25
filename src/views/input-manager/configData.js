import { TEXT, SELECT } from "@/conf/uiTypes";
export const tableConfig = {
  multipleSelection: true,
  index: true,
}
export const columns = [
  {
    prop: "birthday",
    label: "出生日期",
    width: 120,
    align: 'center'
  },
  {
    prop: "name",
    label: "姓名",
    width: 120,
    align: 'center'
  },
  {
    prop: "sex",
    label: "性别",
    width: 120,
    align: 'center'
  },
  {
    prop: "education",
    label: "教育程度",
    width: 120,
    align: 'center'
  },
  {
    prop: "mobile_phone",
    label: "手机号码",
    align: 'center',
    width: 200
  },
  {
    prop: "address1",
    label: "居住地址",
    width: 300,
    align: 'center'
  },

  {
    label: '申请状态',
    prop: 'status',
    align: 'center',
  },
  {
    label: "操作",
    prop: "operation",
    width: 300,
    align: 'center'
  },
  // {
  //   label: "自定义HTML",
  //   align: "center",
  //   formatter() {
  //     return `
  //       <div>
  //         <h3>自定义内容</h3>
  //         <button>按钮</button>
  //       </div>
  //     `
  //   }
  // },
  // {
  //   label: "配送信息",
  //   children: [
  //     {
  //       label: "地址",
  //       children: [
  //         { label: "省份", prop: "name" },
  //         { label: "市区", prop: "address" },
  //       ],
  //     },
  //   ],
  // },
]

const sexOptions = [
  { value: "man", label: "男" },
  { value: "woman", label: "女" }
];


export const genEditForm = function (row) {
  return {
    items: [
      [{ label: '姓名', value: row.name, key: 'name', colSpan: 22, type: TEXT }],
      [{
        label: '性别', value: row.sex, key: 'sex', colSpan: 22, type: SELECT,
        options: sexOptions
      }],
      [{ label: '地址', value: row.address1, key: 'address1', colSpan: 22, type: TEXT }],
    ],
    rules: {
      name: [{ required: true, message: '请输入用户名', trigger: "blur" }],
      sex: [{ required: true, message: '请输入性别', trigger: "blur" }],
      address1: [{ required: true, message: '请输入居住地址', trigger: "blur" }],
    }
  }

}