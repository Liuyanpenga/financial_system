import {
  TEXT,
  SELECT,
  TEXTAREA,
  DATE_PICKER,
} from '@/conf/uiTypes';

export const sexOptions = [
  { value: "man", label: "男" },
  { value: "woman", label: "女" }
];
//行业
export const companyOptions = [
  { value: "education", label: "教育" },
  { value: "finance", label: "金融" }
];
//婚否
export const marriageOptions = [
  { value: "married", label: "已婚" },
  { value: "unmarried", label: "未婚" }
];
//学历
export const educationOptions = [
  { value: "college", label: "大学" },
  { value: "highschool", label: "高中" }
];

// 优化 => data方法中，默认是会Object.defineProperty => 当触发属性的get/set => 页面的更新

const configData = Object.freeze({
  cards: [
    {
      name: "个人基本信息",
      children: [
        [
          { label: "姓名", key: "name", type: TEXT },
          { label: "出生日期", key: "birthday", type: DATE_PICKER, attrs: { placeholder: "选择日期" } },
          {
            label: "性别",
            key: "sex",
            type: SELECT,
            options: sexOptions
          }
        ],
        [{ label: "身份证", key: "identity_card", type: TEXT }],
        [
          {
            label: "婚姻状态",
            key: "marriage",
            type: "select",
            options: marriageOptions
          },
          {
            label: "教育程度",
            key: "education",
            type: "select",
            options: educationOptions
          },
          { label: "居住地址", key: "address1", type: TEXT }
        ],
        [
          { label: "户籍地址", key: "address2", type: TEXT },
          { label: "居住电话", key: "phone", type: TEXT },
          { label: "手机号", key: "mobile_phone", type: TEXT }
        ]
      ].map(row => row.map(item => ({ colSpan: 8, ...item })))
    },
    {
      name: "职业信息",
      children: [
        [   // element原生属性
          { label: "现职公司", key: "company", type: TEXT },
          {
            label: "所属行业",
            attrs: { placeholder: '请选择' },
            key: "trade",
            type: "select",
            options: companyOptions
          },
          { label: "职位", key: "position", type: TEXT },
        ].map(item => ({ colSpan: 8, ...item })),
        [
          { label: "公司类型", key: "company_type", type: TEXT },
          { label: "公司电话", key: "company_phone", type: TEXT },
          { label: "公司邮箱", key: "company_email", type: TEXT },
        ].map(item => ({ colSpan: 8, ...item })),
        [{ label: "公司地址", key: "address3", type: TEXT}]
      ]
    },
    {
      name: "收支情况",
      children: [[{ label: "收支情况", key: "income", type: TEXT, colSpan: 12 }]]
    },
    {
      name: "家庭联系人",
      children: [
        [
          { label: "关系", key: "contact", type: TEXT },
          { label: "姓名", key: "contact_name", type: TEXT },
          { label: "手机", key: "contact_phone", type: TEXT }
        ].map(item => ({ colSpan: 12, ...item }))
      ]
    },
    {
      name: "工作证明人",
      children: [
        [
          { label: "关系", key: "contact2", type: TEXT },
          { label: "姓名", key: "contact2_name", type: TEXT },
          { label: "手机", key: "contact2_phone", type: TEXT }
        ].map(item => ({ colSpan: 12, ...item })),
        [
          { label: "部门", key: "contact2_dep", type: TEXT },
          { label: "职位", key: "contact2_pos", type: TEXT }
        ].map(item => ({ colSpan: 12, ...item })),
        [{ label: "备注", key: "remark", type: TEXTAREA }]
      ]
    }
  ],
  rules: {
    name: [
      { required: true, message: "请输入姓名", trigger: "blur" },
      {
        min: 2,
        max: 5,
        message: "长度在 2 到 5 个字符",
        trigger: "blur"
      }
    ],
    identity_card: [
      { required: true, message: "请输入身份证", trigger: "blur" }
    ],
    birthday: [
      {
        type: DATE_PICKER,
        required: true,
        message: "请选择日期",
        trigger: "change"
      }
    ],
    sex: [{ required: true, message: "请选择性别", trigger: "change" }],
    marriage: [
      { required: true, message: "请选择婚姻状态", trigger: "change" }
    ],
    education: [
      { required: true, message: "请选择教育程度", trigger: "change" }
    ],
    trade: [
      { required: true, message: "请选择所属行业", trigger: "change" }
    ],

    address1: [
      { required: true, message: "请输入居住地址", trigger: "blur" }
    ],
    address2: [
      { required: true, message: "请输入户籍地址", trigger: "blur" }
    ],
    phone: [{ required: true, message: "请输入居住电话", trigger: "blur" }],
    mobile_phone: [
      { required: true, message: "请输入手机号", trigger: "blur" }
    ],
    company: [
      { required: true, message: "请输入现职公司全称", trigger: "blur" }
    ],
    position: [{ required: true, message: "请输入职位", trigger: "blur" }],
    address3: [
      { required: true, message: "请输入公司地址", trigger: "blur" }
    ],
    company_type: [
      { required: true, message: "请输入公司类型", trigger: "blur" }
    ],
    company_email: [
      { required: true, message: "请输入公司邮箱", trigger: "blur" }
    ],
    company_phone: [
      { required: true, message: "请输入公司电话", trigger: "blur" }
    ],
    income: [
      { required: true, message: "请输入收支情况", trigger: "blur" }
    ],
    contact: [{ required: true, message: "请输入关系1", trigger: "blur" }],
    contact_name: [
      { required: true, message: "请输入姓名", trigger: "blur" }
    ],
    contact_phone: [
      { required: true, message: "请输入手机", trigger: "blur" }
    ],
    contact2: [{ required: true, message: "请输入关系2", trigger: "blur" }],
    contact2_name: [
      { required: true, message: "请输入姓名", trigger: "blur" }
    ],
    contact2_phone: [
      { required: true, message: "请输入手机", trigger: "blur" }
    ],
    contact2_dep: [
      { required: true, message: "请输入部门", trigger: "blur" }
    ],
    contact2_pos: [
      { required: true, message: "请输入职位", trigger: "blur" }
    ]
  },
}
)

export default configData