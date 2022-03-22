<template>
  <div>
    <CommonHeader title="ニュース一覧"></CommonHeader>
    <div class="px-32">
      <div class="flex justify-end items-center">
        <div class="flex justify-center items-center">
          <BaseButton color="accent-2" @click="saveAsDraft">下書き保存</BaseButton>
          <BaseButton class="ml-4" color="accent-1" @click="saveAsPublic">公開</BaseButton>
        </div>
      </div>
      <span class="flex mt-8">タイトル</span>
      <BaseTextField v-model="title" class="mt-4"></BaseTextField>
      <div class="mt-8 border-t border-dashed border-gray-300"></div>
      <span class="flex mt-8 mb-4">本文</span>
      <CommonTinyMceEditor v-model="contents" :height="450"></CommonTinyMceEditor>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { News } from '~/types'

@Component({})
export default class extends Vue {
  NewsRepository = this.$repositories.news
  title: string = ''
  contents: string = ''

  async saveAsDraft() {
    const params: News.PostRequest = {
      public: false,
      title: this.title,
      rendered_contents: this.contents,
    }

    await this.NewsRepository.post(params)
  }

  async saveAsPublic() {
    const params: News.PostRequest = {
      public: true,
      title: this.title,
      rendered_contents: this.contents,
    }

    await this.NewsRepository.post(params)
  }
}
</script>
