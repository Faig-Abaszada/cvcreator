<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title" v-if="!editing">
        {{ professionalSummarySec.sectionTitle }}
      </h2>
<!--      <h4 class="subtitle">-->
<!--        Include 2-3 clear sentences about your overall experience-->
<!--      </h4>-->
      <label v-show="!editing"
             for="personalDetailsSec"
             @click="enableEditing"
      >
        <EditIcon class="icon" />
      </label>
      <input class="title-input"
             type="text"
             v-if="editing"
             id="personalDetailsSec"
             @blur="disableEditing"
             @keyup.enter="disableEditing"
             v-model="sectionTitleValue"
      >
    </div>



    <div class="editor">
      <vue-editor v-model="blogHTML" useCustomImageHandler />
    </div>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import { mapFields } from 'vuex-map-fields';
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
