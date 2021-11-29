<template>
  <div class="section">

    <div class="section-header">
      <MoveIcon class="icon move-icon" />
      <h2 class="title" v-if="!editing">
        {{ socialLinksSec.sectionTitle }}
      </h2>
<!--      <h4 class="subtitle">-->
<!--        You can add links to websites you want hiring managers to see! Perhaps-->
<!--        it will be a link to you portfolio. LinkedIn profile.-->
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
      <LinksItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add link</button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import LinksItem from './section-items/LinksItem.vue';
import {mapFields} from "vuex-map-fields";

export default {
  components: {
    MoveIcon,
    PlusIcon,
    EditIcon,
    LinksItem,
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
