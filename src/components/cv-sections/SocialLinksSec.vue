<template>
  <div class="section">

    <EditableText :value.sync="socialLinksSec.sectionTitle" :movable="true"/>







    <div class="section-inner">
      <LinksItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add link</button>
  </div>
</template>
<script>
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import LinksItem from './section-items/LinksItem.vue';
import EditableText from "../EditableText";
import {mapFields} from "vuex-map-fields";

export default {
  components: {
    PlusIcon,
    LinksItem,
    EditableText
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
    };
  },
  methods: {
    enableEditing() {
      this.sectionTitleValue = this.socialLinksSec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.socialLinksSec.sectionTitle = this.sectionTitleValue;
    }
  },
  computed: {
    ...mapFields([
      'resume',
      'resume.socialLinksSec'

    ])
  }
};
</script>
<style lang="scss">
</style>
