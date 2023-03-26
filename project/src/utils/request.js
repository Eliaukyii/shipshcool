import axios from 'axios'
import qs from 'qs'
// import md5 from "js-md5";

//创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 3000,
  withCredentials: true //前端每次发送请求时就会带上cookie信息
})

service.interceptors.request.use(config => {
  // if (config.data){
  //   const Token = window.sessionStorage.getItem('Token')
  //   if(Token){
  //     config.headers.Authorization = `Bearer ${Token}`
  //   }
  //   //添加其他参数
  //   config.data={
  //     Appid:'312502',
  //     ...config.data
  //   }
  // }
  // console.log(config);

  if(config.data){
    config.data=qs.stringify(config.data);
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response;
  }

}, error => {
  return Promise.reject(error);
});

export default service