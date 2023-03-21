export const tableConfig = {
  multipleSelection: true,
  index: true,
}
export const columns = [
  {
    prop: "date",
    label: "日期",
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
    prop: "address",
    label: "地址",
    align: 'center'
  },
  {
    label: "操作",
    prop: "operation",
    align: 'center'
  },
  {
    label: "配送信息",
    children: [
      {
        label: "地址",
        children: [
          { label: "省份", prop: "name" },
          { label: "市区", prop: "address" },
        ],
      },
    ],
  },
]
export const tableData = [
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-08",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-06",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-07",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
]