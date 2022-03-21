import { NuxtAxiosInstance } from '@nuxtjs/axios'

const resource: string = 'news'

export default ($axios: NuxtAxiosInstance) => ({
  get(): Promise<any> {
    return $axios.get(`${resource}`)
  },
})
