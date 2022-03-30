<template>
  <div class="flex justify-center items-center h-screen">
    <div v-if="error.statusCode === 404">
      <span class="flex justify-center items-center text-3xl">404 not found</span>
      <span class="flex justify-center items-center mt-4">ページが見つかりませんでした。</span>
    </div>
    <div v-else>
      <span class="flex justify-center items-center text-3xl">500 internal server error</span>
      <span class="flex justify-center items-center mt-4">サーバーにてエラーが発生しました。</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { NuxtError } from '@nuxt/types'

@Component({
  layout: 'empty'
})
export default class extends Vue {
  @Prop({ type: Object, required: false, default: () => {} })
  error!: NuxtError

  created() {
    if (this.error.statusCode === 401) {
      this.$router.push('/login')
    }
  }
}
</script>
