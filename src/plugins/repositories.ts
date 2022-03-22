import { Context } from '@nuxt/types'
import NewsRepository from '~/repositories/news'
import LoginRepository from '~/repositories/login'

export type Repositories = {
  [key: string]: any
}

export default (
  { $axios }: Context,
  inject: (key: string, value: any) => void
) => {
  const repositories: Repositories = {
    news: NewsRepository($axios),
    login: LoginRepository($axios),
  }
  inject('repositories', repositories)
}
