<template>
  <div class="h-400px w-400px px-8 py-16 bg-white">
    <span class="flex justify-center text-primary text-xl">Login Form</span>
    <BaseTextField class="mt-8" placeholder="ユーザー名"></BaseTextField>
    <BaseTextField class="mt-6" placeholder="パスワード"></BaseTextField>
    <div class="flex justify-center items-center">
      <BaseButton class="mt-8" color="primary" style="width: 200px">Login</BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'background'
})
export default class extends Vue {}
</script>
