<template>
  <div class="h-400px w-400px px-8 py-16 bg-white">
    <span class="flex justify-center text-primary text-xl">Login Form</span>
    <BaseTextField v-model="email" class="mt-8" placeholder="メールアドレス"></BaseTextField>
    <BaseTextField v-model="password" class="mt-6" placeholder="パスワード"></BaseTextField>
    <span v-if="isError" class="flex justify-center items-center mt-6 text-error">ユーザー名またはパスワードが違います</span>
    <div class="flex justify-center items-center">
      <BaseButton class="mt-8" color="primary" style="width: 200px" @click="onClickLogin">Login</BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'background'
})
export default class extends Vue {
  LoginRepository = this.$repositories.login
  isError: boolean = false
  email: string = ''
  password: string = ''

  async onClickLogin() {
    const params = {
      email: this.email,
      password: this.password,
    }

    const res = await this.LoginRepository.post(params).catch(() => {
      this.isError = true
    })

    if (res?.access_token) {
      localStorage.setItem('access_token', res.access_token)
      this.$router.push('/')
    }
  }
}
</script>
