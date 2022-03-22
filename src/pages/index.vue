<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  beforeCreate() {
    this.$router.push('/news')
  }
}
</script>
