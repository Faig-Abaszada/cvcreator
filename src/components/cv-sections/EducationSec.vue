<template>
  <div class="section">


    <EditableText :value.sync="educationSec.sectionTitle" :movable="true"/>

    <div class="section-inner">
      <EduItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add education</button>
  </div>
</template>
<script>
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import EduItem from './section-items/EduItem.vue';
import EditableText from "../EditableText";
import {mapFields} from "vuex-map-fields";

export default {
  components: {
    EduItem,
    EditableText,
    PlusIcon,
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
    };
  },
  methods: {
    enableEditing() {
      this.sectionTitleValue = this.educationSec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.educationSec.sectionTitle = this.sectionTitleValue;
    }
  },
  computed: {
    ...mapFields([
      'resume',
      'resume.educationSec'

    ])
  }
};
</script>
<style lang="scss">
</style>
