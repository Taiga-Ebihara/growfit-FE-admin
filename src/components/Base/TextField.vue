<template>
  <input
    class="flex h-12 w-full px-2 border border-gray-300 rounded-lg outline-none"
    type="text"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false, default: '' })
  value!: string

  @Emit('input')
  onInput() {}
}
</script>
