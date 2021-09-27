<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">Professional Summary<EditIcon class="icon" /></h2>
      <h4 class="subtitle">
        Include 2-3 clear sentences about your overall experience
      </h4>
    </div>

    <div class="editor">
      <vue-editor
        :editorOptions="editorSettings"
        v-model="blogHTML"
        useCustomImageHandler
        @image-added="imageHandler"
        :editorToolbar="customToolbar"
      />
    </div>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
export default {
  components: {
    EditIcon,
  },
  data() {
    return {
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    };
  },
  methods: {},
};
</script>