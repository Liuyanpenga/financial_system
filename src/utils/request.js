import Axios from "axios";
import { Notification, Loading } from 'element-ui'

let service;
const reqInstance = Axios.create({
  baseURL: '/api',
  timeout: 5000
})

reqInstance.interceptors.request.use((config) => {
  service = Loading.service()
  // 再次请求时获取缓存的并设置请求头 token
  let token = window.sessionStorage.getItem('token')
  if (token) config.headers['token'] = token
  return config
})

reqInstance.interceptors.response.use((response) => {
  // 业务处理
  service.close()
  // 获取并存储 token
  let token = response.data.data.token
  window.sessionStorage.setItem('token', token)


  return response
}, err => {
  service.close()

  // 状态码非200 错误提示
  Notification.error(err.message)
  return Promise.reject(err)
})

export default reqInstance