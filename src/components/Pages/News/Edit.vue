<template>
  <div>
    <CommonHeader title="ニュース一覧"></CommonHeader>
    <div class="px-32">
      <div class="flex justify-between items-center">
        <span class="text-base">ID: {{ $route.params.id }}</span>
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
      <div class="flex justify-end items-center">
        <BaseButton color="error" class="mt-8" @click="deleteItem">削除</BaseButton>
      </div>
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

  async created() {
    const res: News.FindResponse = await this.NewsRepository.find(this.id)
    this.title = res.title
    this.contents = res.rendered_contents
  }

  get id(): string {
    return this.$route.params.id
  }

  async deleteItem() {
    await this.NewsRepository.delete(this.id)
    this.$router.push('/news')
  }

  async saveAsDraft() {
    const params: News.PatchRequest = {
      public: false,
      title: this.title,
      rendered_contents: this.contents,
    }

    await this.NewsRepository.patch(this.id, params)
  }

  async saveAsPublic() {
    const params: News.PatchRequest = {
      public: true,
      title: this.title,
      rendered_contents: this.contents,
    }

    await this.NewsRepository.patch(this.id, params)
  }
}
</script>
