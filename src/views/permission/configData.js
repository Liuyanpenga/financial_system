import { TEXT, RADIO, PASSWORD } from "@/conf/uiTypes";

export default {
  items: Object.freeze([
    [{ label: '用户名', key: 'account', type: TEXT }],
    [{ label: '密码', key: 'password', type: PASSWORD }],
    [{ label: '密码', key: 'confirmPwd', type: PASSWORD }],
    [
      {
        label: '权限分配', key: 'role_id', type: RADIO, value: '2', colSpan: 8,
        radios: [
          { label: '2', title: '销售人员', },
          { label: '1', title: '初审人员', },
        ]
      }
    ]
  ]),
  rules: {
    account: [{ required: true, message: '请输入用户名' }],
    password: [{ required: true, message: '请输入密码' }],
    confirmPwd: [{ trigger: 'blur' }, { required: true, message: '请确认密码' }],
    role_id: [{ required: true }]
  }
}
