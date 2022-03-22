<template>
  <div>
    <CommonHeader title="ニュース一覧"></CommonHeader>
    <div class="px-32">
      <div class="flex justify-between items-center">
        <span class="text-base">ID: {{ $route.params.id }}</span>
        <div class="flex justify-center items-center">
          <BaseButton color="accent-2">下書き保存</BaseButton>
          <BaseButton class="ml-4" color="accent-1">公開</BaseButton>
        </div>
      </div>
      <span class="flex mt-8">タイトル</span>
      <BaseTextField class="mt-4"></BaseTextField>
      <div class="mt-8 border-t border-dashed border-gray-300"></div>
      <span class="flex mt-8 mb-4">本文</span>
      <CommonTinyMceEditor :height="450"></CommonTinyMceEditor>
      <div class="flex justify-end items-center">
        <BaseButton color="error" class="mt-8">削除</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  NewsRepository = this.$repositories.news
  title: string = ''
  contents: string = ''

  async created() {
    const res = await this.NewsRepository.get()
  }
}
</script>
