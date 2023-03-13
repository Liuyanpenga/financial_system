import Axios from "axios";
import { Notification,Loading } from 'element-ui'

let service;
const reqInstance = Axios.create({
  baseURL: '/api',
  timeout: 5000
})

reqInstance.interceptors.request.use((config) => {
  service = Loading.service()
  return config
})
reqInstance.interceptors.response.use((response) => {
  // 业务处理
  service.close()
  return response
}, err => {

  // 状态码非200 错误提示
  Notification.error(err.message)
  return Promise.reject(err)
})

export default reqInstance