<template>
  <div>
    <CommonHeader title="ニュース一覧"></CommonHeader>
    <div class="flex justify-end items-center">
      <BaseButton class="mr-8" color="primary" prepend-icon="add"
        >新規登録</BaseButton
      >
    </div>
    <UniquesNewsDataTable
      class="mt-4"
      :data="displayData"
    ></UniquesNewsDataTable>
    <CommonPagination
      class="mt-10"
      :pagination="pagination"
      @click:first="pagination.page = $event"
      @click:last="pagination.page = $event"
      @click:next="pagination.page = $event"
      @click:prev="pagination.page = $event"
    ></CommonPagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  NewsRepositories = this.$repositories.news
  originalData: any = []
  pagination = {
    lastPage: 0,
    page: 1,
    perPage: 10,
  }

  async created() {
    const res = await this.NewsRepositories.get()
    this.originalData = res
    this.pagination.lastPage = Math.ceil(res.length / this.pagination.perPage)
  }

  get displayData() {
    const start: number = (this.pagination.page - 1) * this.pagination.perPage
    const end: number = start + this.pagination.perPage

    return this.originalData.slice(start, end)
  }
}
</script>
