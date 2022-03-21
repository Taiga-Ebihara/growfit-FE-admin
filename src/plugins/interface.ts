import { Repositories } from '@/plugins/repositories'

declare module 'vue/types/vue' {
  interface Vue {
    $repositories: Repositories
  }
}
