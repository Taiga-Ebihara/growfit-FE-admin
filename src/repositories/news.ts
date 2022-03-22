import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { News } from '~/types'

const resource: string = 'news'

export default ($axios: NuxtAxiosInstance) => ({
  get(): Promise<News.GetResponse> {
    return $axios.get(`${resource}`)
  },
  find(id: string): Promise<News.FindResponse> {
    return $axios.get(`${resource}/${id}`)
  },
  post(params: News.PostRequest): Promise<News.PostResponse> {
    return $axios.post(`${resource}`, params)
  },
  patch(id: string, params: News.PatchRequest): Promise<News.PatchResponse> {
    return $axios.patch(`${resource}/${id}`, params)
  },
  delete(id: string): Promise<News.DeleteResponse> {
    return $axios.delete(`${resource}/${id}`)
  },
})
