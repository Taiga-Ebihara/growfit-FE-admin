import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Login } from '~/types'

const resource: string = 'login'

export default ($axios: NuxtAxiosInstance) => ({
  post(params: Login.PostRequest): Promise<Login.PostResponse> {
    return $axios.post(`${resource}`, params)
  },
})
