import { Context } from '@nuxt/types'
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export default ({ $axios }: Context) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
  })

  $axios.onResponse((response: AxiosResponse) => {
    return Promise.resolve(response.data)
  })

  $axios.onError((error: AxiosError) => {
    return Promise.reject(error.response)
  })
}
