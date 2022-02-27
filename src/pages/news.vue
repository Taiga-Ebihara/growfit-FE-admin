<template>
  <div>
    <div class="flex justify-between items-center pl-6 pr-4 h-104px">
      <span class="text-xl">ニュース一覧</span>
      <button class="flex justify-start items-center py-2 px-4 rounded-lg duration-300 hover:bg-gray-100">
        <span>ログアウト</span>
        <span class="material-icons ml-2">logout</span>
      </button>
    </div>
    <div class="flex justify-end items-center">
      <button class="flex justify-start items-center mr-8 py-2 px-4 bg-primary rounded-lg text-white duration-300 hover:opacity-80">
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
        <li class="py-2 border-b cursor-pointer">
          <div class="grid gap-2 grid-cols-12 items-center ml-4">
            <div class="flex col-span-1">
              <span class="py-2 px-4 bg-accent-1 rounded-lg text-white truncate">公開中</span>
            </div>
            <span class="col-span-1 truncate">1</span>
            <span class="col-span-3 truncate">テストタイトル1</span>
            <span class="col-span-3 truncate">テスト本文1</span>
            <span class="col-span-2 truncate">2022-02-27 21:30:00</span>
            <span class="col-span-2 truncate">2022-02-27 21:30:00</span>
          </div>
        </li>
        <li class="py-2 border-b cursor-pointer">
          <div class="grid gap-2 grid-cols-12 items-center ml-4">
            <div class="flex col-span-1">
              <span class="py-2 px-4 bg-accent-2 rounded-lg text-white truncate">下書き</span>
            </div>
            <span class="col-span-1 truncate">2</span>
            <span class="col-span-3 truncate">テストタイトル2</span>
            <span class="col-span-3 truncate">テスト本文2</span>
            <span class="col-span-2 truncate">2022-02-27 21:30:00</span>
            <span class="col-span-2 truncate">2022-02-27 21:30:00</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center items-center mt-10">
      <button>
        <span class="material-icons flex text-primary duration-300 hover:opacity-80">keyboard_double_arrow_left</span>
      </button>
      <button>
        <span class="material-icons flex text-primary duration-300 hover:opacity-80">keyboard_arrow_left</span>
      </button>
      <div class="flex justify-center items-center h-30px w-30px ml-4">...</div>
      <button class="flex justify-center items-center h-30px w-30px ml-4 border rounded-lg text-sm duration-300 hover:bg-gray-100">3</button>
      <button class="flex justify-center items-center h-30px w-30px ml-4 bg-primary rounded-lg text-sm text-white duration-300 hover:opacity-80">4</button>
      <button class="flex justify-center items-center h-30px w-30px ml-4 border rounded-lg text-sm duration-300 hover:bg-gray-100">5</button>
      <div class="flex justify-center items-center h-30px w-30px ml-4">...</div>
      <button>
        <span class="material-icons flex ml-4 text-primary duration-300 hover:opacity-80">keyboard_arrow_right</span>
      </button>
      <button>
        <span class="material-icons flex text-primary duration-300 hover:opacity-80">keyboard_double_arrow_right</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {}
</script>
