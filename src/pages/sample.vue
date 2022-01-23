<template>
  <div class="p-6">
    <div class="flex">
      <input v-model="newMessage" class="py-1 px-2 rounded border-2" type="text">
      <button class="ml-1 py-1 px-2 bg-gray-200 rounded border-2" @click="onClickAddButton">add</button>
    </div>
    <div class="mt-4">
      <p v-for="(message, index) in messageList" :key="index" class="mt-1 text-gray-400">{{ message }}</p>
      <p v-if="!messageList.length" class="mt-1 text-gray-400">no messages</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  newMessage: string = ''
  messageList: string[] = []

  onClickAddButton() {
    this.messageList.push(this.newMessage)
    this.newMessage = ''
  }
}
</script>