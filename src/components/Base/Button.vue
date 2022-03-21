<template>
  <button
    class="flex justify-center items-center py-2 px-4 rounded-lg duration-300 hover:bg-gray-100"
    :class="{'bg-primary text-white': color === 'primary' }"
    @click="onClick"
  >
    <span v-if="prependIcon" class="material-icons mr-2">{{ prependIcon }}</span>
    <slot></slot>
    <span v-if="appendIcon" class="material-icons ml-2">{{ appendIcon }}</span>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String, required: false, default: '' })
  appendIcon!: string

  @Prop({ type: String, required: false, default: '' })
  color!: string

  @Prop({ type: String, required: false, default: '' })
  prependIcon!: string

  @Emit('click')
  onClick() {}
}
</script>
