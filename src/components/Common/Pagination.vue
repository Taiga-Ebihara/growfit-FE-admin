<template>
  <div class="flex justify-center items-center">
    <button @click="onClickFirst">
      <span
        class="material-icons flex text-primary duration-300 hover:opacity-80"
        >keyboard_double_arrow_left</span
      >
    </button>
    <button>
      <span
        class="material-icons flex text-primary duration-300 hover:opacity-80"
        @click="onClickPrev"
        >keyboard_arrow_left</span
      >
    </button>
    <button
      v-if="pagination.page - 1 > 0"
      class="flex justify-center items-center h-30px w-30px ml-4 border rounded-lg text-sm duration-300 hover:bg-gray-100"
      @click="onClickPrev"
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
      @click="onClickNext"
    >
      {{ pagination.page + 1 }}
    </button>
    <button @click="onClickNext">
      <span
        class="material-icons flex ml-4 text-primary duration-300 hover:opacity-80"
        >keyboard_arrow_right</span
      >
    </button>
    <button @click="onClickLast">
      <span
        class="material-icons flex text-primary duration-300 hover:opacity-80"
        >keyboard_double_arrow_right</span
      >
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'
import { Common } from '~/types'

@Component({})
export default class extends Vue {
  @Prop({ type: Object, required: false, default: () => {} })
  pagination!: Common.Pagination

  @Emit('click:first')
  onClickFirst() {}

  @Emit('click:last')
  onClickLast() {}

  @Emit('click:prev')
  onClickPrev() {}

  @Emit('click:next')
  onClickNext() {}
}
</script>
