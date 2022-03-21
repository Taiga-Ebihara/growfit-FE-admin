import { Context } from '@nuxt/types'
import NewsRepository from '~/repositories/news'

export type Repositories = {
  [key: string]: any
}

export default ({ $axios }: Context, inject: (key: string, value: any) => void) => {
  const repositories: Repositories = {
    news: NewsRepository($axios)
  }
  inject('repositories', repositories)
}
