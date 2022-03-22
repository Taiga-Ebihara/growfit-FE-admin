<template>
  <editor
    api-key="no-api-key"
    :init="{
      height: height,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help',
    }"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator'
import Editor from '@tinymce/tinymce-vue'

@Component({
  components: {
    editor: Editor,
  },
})
export default class extends Vue {
  @Prop({ type: Number, required: false, default: 500 })
  height!: number

  @Prop({ type: String, required: false, default: '' })
  value!: string

  @Emit('input')
  onInput() {}
}
</script>
