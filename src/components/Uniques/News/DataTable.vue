<template>
  <div class="px-4">
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
      <li
        v-for="item in data"
        :key="item.id"
        class="py-2 border-b cursor-pointer"
      >
        <NuxtLink class="grid gap-2 grid-cols-12 items-center ml-4" :to="`/news/${item.id}`">
          <div class="flex col-span-1">
            <span
              class="py-2 px-4 rounded-lg text-white truncate"
              :class="[item.public ? 'bg-accent-1' : 'bg-accent-2']"
            >{{ item.public ? '公開中' : '下書き' }}</span>
          </div>
          <span class="col-span-1 truncate">{{ item.id }}</span>
          <span class="col-span-3 truncate">{{ item.title }}</span>
          <span class="col-span-3 truncate">{{ item.text_contents }}</span>
          <span class="col-span-2 truncate">{{ item.created_at }}</span>
          <span class="col-span-2 truncate">{{ item.updated_at }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { News } from '~/types'

@Component({})
export default class extends Vue {
  @Prop({ type: Array, required: false, default: () => [] })
  data!: News.GetData[]
}
</script>
