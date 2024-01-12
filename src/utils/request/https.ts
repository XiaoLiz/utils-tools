import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { showMessage } from './status'

interface ResponseData<T> {
  code: number | string
  data: T
  message: string
  status: string | number
}

const instance: AxiosInstance = axios.create({
  timeout: 10000,
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('Access-Token') || ''
    if (token) {
      config.headers['Qsc-Token'] = `${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    }
    showMessage(response.status)
    return response
  },
  (error: AxiosError) => {
    const { response } = error
    if (response) {
      return Promise.reject(response.data)
    }
  }
)

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise<T>(resolve => {
    instance.request<ResponseData<T>>(config).then((response: AxiosResponse<ResponseData<T>>) => {
      console.log(response, '====== data  ========')
      const data: T = response.data.data
      console.log(data, '====== data ========')
      resolve(data)
    })
  })
}

export function get<T>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' })
}

export function post<T>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' })
}

export function put<T>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'put' })
}

export function del<T>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'delete' })
}

export default request
