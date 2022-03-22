<template>
  <div class="flex justify-between items-center pl-6 pr-4 h-104px">
    <span class="text-xl">{{ title }}</span>
    <BaseButton append-icon="logout" @click="onClickLogout"
      >ログアウト</BaseButton
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false, default: '' })
  title!: string

  @Emit('click:logout')
  onClickLogout() {
    localStorage.removeItem('access_token')
    this.$router.push('/login')
  }
}
</script>
