import axios from 'axios'

export function request(config) {
    //1. 创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

  //2. 拦截器
  //2.1 请求拦截的作用
    instance.interceptors.request.use(config => {
      return config;//一定要返回 不然报错
    }, err => {
      //console.log(err);
    });

    //2.2 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err);
    })

    //3. 发送真正网络请求, instance本身就是promise
    return instance(config)

}
