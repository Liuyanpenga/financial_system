import { MessageBox, Message } from "element-ui";

// 消息框封装
async function innerMessageBox(title) {
  try {
    await MessageBox.confirm(title, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    });
    return true;
  } catch {
    Message({
      type: 'info',
      message: '操作已取消'
    });
    return false;
  }
}

export default {
  install(Vue) {
    // Vue.prototype.$econfirm = innerMessageBox
    // 只能用不能改
    Object.defineProperty(Vue.prototype, '$econfirm', {
      set() { },
      get() {
        return innerMessageBox
      }
    })
  }
}