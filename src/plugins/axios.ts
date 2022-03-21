import { Context } from '@nuxt/types'
import { AxiosError, AxiosResponse } from 'axios'

export default ({ $axios }: Context) => {
  $axios.onResponse((response: AxiosResponse) => {
    return Promise.resolve(response.data)
  })

  $axios.onError((error: AxiosError) => {
    return Promise.reject(error.response)
  })
}
