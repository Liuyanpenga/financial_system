import Axios, { AxiosError } from "axios";
import { Notification, Loading } from 'element-ui'
import { transData, transPager } from "./transData";

let service;
const reqInstance = Axios.create({
  baseURL: '/api',
  timeout: 5000,
  transformResponse: [transPager, transData]
})

reqInstance.interceptors.request.use((config) => {
  if(config.fullLoading){
    service = Loading.service()
  }
  // 再次请求时获取缓存的并设置请求头 token
  let token = window.sessionStorage.getItem('token')
  if (token) config.headers['token'] = token
  return config
})

reqInstance.interceptors.response.use((response) => {
  // 业务处理
  if(response.config.fullLoading){
    service.close()
  }
  // 获取并存储 token
  let token = response.data.data.token
  // 没token不存储不然undefined
  if(token) window.sessionStorage.setItem('token', token)

  return response
}, err => {

  if(err instanceof AxiosError){
    if(err.config.fullLoading){
      service.close()
    }
  }else if(err instanceof Error){
    console.log(err)
  }

  // 状态码非200 错误提示 业务异常
  if (response?.data?.code === 401 || response?.data?.code === 603) {
    router.replace({ 
        name: 'privilege' //  401页面
    });
}
  Notification.error(err.message)
  return Promise.reject(err)
})

export default reqInstance