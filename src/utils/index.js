import jwtDecode from "jwt-decode";

export const isLogin = () => {
  // 判断是否登录就是判断是否有 token
  let token = window.sessionStorage.getItem('token')
  if (!token) return false;
  // 解析 token
  return jwtDecode(token, 'jindu520')

}