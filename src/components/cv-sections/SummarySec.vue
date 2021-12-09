<template>
  <div class="section">


    <EditableText :value.sync="professionalSummarySec.sectionTitle" :movable="false"/>



    <div class="editor">
      <vue-editor v-model="blogHTML" useCustomImageHandler />
    </div>
  </div>
</template>
<script>
import EditableText from "../EditableText";
import { mapFields } from 'vuex-map-fields';
export default {
  components: {
    EditableText,
  },
  data() {
    return {
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      editing: false,
      sectionTitleValue: null,
    };
  },
  methods: {
    enableEditing() {
      this.sectionTitleValue = this.professionalSummarySec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.professionalSummarySec.sectionTitle = this.sectionTitleValue;
    }
  },
  computed: {
    ...mapFields([
        'resume',
        'resume.professionalSummarySec'

    ])
  }
};
</script>
