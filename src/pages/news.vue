<template>
  <div>
    <div class="flex justify-between items-center pl-6 pr-4 h-104px">
      <span class="text-xl">ニュース一覧</span>
      <button
        class="flex justify-start items-center py-2 px-4 rounded-lg duration-300 hover:bg-gray-100"
      >
        <span>ログアウト</span>
        <span class="material-icons ml-2">logout</span>
      </button>
    </div>
    <div class="flex justify-end items-center">
      <button
        class="flex justify-start items-center mr-8 py-2 px-4 bg-primary rounded-lg text-white duration-300 hover:opacity-80"
      >
        <span class="material-icons">add</span>
        <span class="ml-2">新規登録</span>
      </button>
    </div>
    <div class="mt-4 px-4">
      <div class="py-4 border-b">
        <div class="grid gap-2 grid-cols-12 text-sm ml-4">
          <span class="col-span-1">ステータス</span>
          <span class="col-span-1">ID</span>
          <span class="col-span-3">タイトル</span>
          <span class="col-span-3">本文</span>
          <span class="col-span-2">作成日時</span>
          <span class="col-span-2">更新日時</span>
        </div>
      </div>
      <ul class="text-xs">
        <li v-for="item in displayData" :key="item.id" class="py-2 border-b cursor-pointer">
          <div class="grid gap-2 grid-cols-12 items-center ml-4">
            <div class="flex col-span-1">
              <span class="py-2 px-4 bg-accent-1 rounded-lg text-white truncate"
                >公開中</span
              >
            </div>
            <span class="col-span-1 truncate">{{ item.id }}</span>
            <span class="col-span-3 truncate">{{ item.title }}</span>
            <span class="col-span-3 truncate">{{ item.text_contents }}</span>
            <span class="col-span-2 truncate">{{ item.created_at }}</span>
            <span class="col-span-2 truncate">{{ item.updated_at }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center items-center mt-10">
      <button @click="toFirstPage">
        <span
          class="material-icons flex text-primary duration-300 hover:opacity-80"
          >keyboard_double_arrow_left</span
        >
      </button>
      <button>
        <span
          class="material-icons flex text-primary duration-300 hover:opacity-80"
          @click="toPrevPage"
          >keyboard_arrow_left</span
        >
      </button>
      <button
        v-if="pagination.page - 1 > 0"
        class="flex justify-center items-center h-30px w-30px ml-4 border rounded-lg text-sm duration-300 hover:bg-gray-100"
        @click="toPrevPage"
      >
        {{ pagination.page - 1 }}
      </button>
      <button
        class="flex justify-center items-center h-30px w-30px ml-4 bg-primary rounded-lg text-sm text-white duration-300 hover:opacity-80"
      >
        {{ pagination.page }}
      </button>
      <button
        v-if="pagination.page + 1 <= pagination.lastPage"
        class="flex justify-center items-center h-30px w-30px ml-4 border rounded-lg text-sm duration-300 hover:bg-gray-100"
        @click="toNextPage"
      >
        {{ pagination.page + 1 }}
      </button>
      <button @click="toNextPage">
        <span
          class="material-icons flex ml-4 text-primary duration-300 hover:opacity-80"
          >keyboard_arrow_right</span
        >
      </button>
      <button @click="toLastPage">
        <span
          class="material-icons flex text-primary duration-300 hover:opacity-80"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>
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
    this.pagination.lastPage = Math.ceil(res.length/this.pagination.perPage)
  }

  get displayData() {
    const start: number = (this.pagination.page - 1) * this.pagination.perPage
    const end: number = start + this.pagination.perPage

    return this.originalData.slice(start, end)
  }

  toFirstPage() {
    this.pagination.page = 1
  }

  toNextPage() {
    if (this.pagination.page < this.pagination.lastPage) {
      this.pagination.page++
    }
  }

  toLastPage() {
    this.pagination.page = this.pagination.lastPage
  }

  toPrevPage() {
    if (this.pagination.page > 1) {
      this.pagination.page--
    }
  }
}
</script>
