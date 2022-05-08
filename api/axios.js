import axios from "axios"
import config from '../config'

// 对当前项目的配置环境做判断，改变接口请求地址
const baseURL = process.env.NODE_ENV === 'development' ? config.baseURL.env : config.baseURL.pro

class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    // axios 的相关配置
    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            header: {

            }
        }
        return config
    }

    /*
     * 拦截器
     * instance: axios 实例
     */
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            console.log('response', response);
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            console.log('err', error);
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    // 进行接口请求都会调用 request 函数
    request(options) {
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseURL)