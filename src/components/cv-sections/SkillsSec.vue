<template>
  <div class="section">


    <div class="section-header">
      <MoveIcon class="icon move-icon" />
      <h2 class="title" v-if="!editing">
        {{ skillsSec.sectionTitle }}
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





    <div class="section-inner" ref="sectionInner">
      <SkillItem />
      <!-- v-for="(skillObj, index) in skillsSec.skills" :key="index"
      :skillObj="skillObj" -->
    </div>
    <button class="btn add-skill">
      <PlusIcon class="icon"/> Add skill
    </button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import SkillItem from './section-items/SkillItem.vue';

// import Vue from 'vue';
// import { mapState, mapMutations } from 'vuex';

import {mapFields} from "vuex-map-fields";

// import firebase from 'firebase/app';
// import 'firebase/storage';
// import db from '../firebase/firebaseInit';

export default {
  components: {
    MoveIcon,
    PlusIcon,
    EditIcon,
    SkillItem,
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
    }
  },
  computed: {
    ...mapFields([
      'resume',
      'resume.skillsSec'

    ])
  },
  methods: {
    enableEditing() {
      this.sectionTitleValue = this.skillsSec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.skillsSec.sectionTitle = this.sectionTitleValue;
    }
  },
};
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 10, 4);
//     }
//   }
// }
</script>
<style lang="scss">
</style>
