<template>
  <div class="section">
    <div class="section-header">
      <MoveIcon class="icon move-icon" />
      <h2 class="title" v-if="!editing">
        {{ educationSec.sectionTitle }}
      </h2>
<!--      <h4 class="subtitle">-->
<!--        If relevant, include your most recent educational achievments and the-->
<!--        dates here.-->
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



    <div class="section-inner">
      <EduItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add education</button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import EduItem from './section-items/EduItem.vue';
import {mapFields} from "vuex-map-fields";

export default {
  components: {
    EduItem,
    MoveIcon,
    PlusIcon,
    EditIcon,
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
