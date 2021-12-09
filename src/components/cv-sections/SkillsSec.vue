<template>
  <div class="section">


    <!--      <h4 class="subtitle">-->
    <!--        You can add links to websites you want hiring managers to see! Perhaps-->
    <!--        it will be a link to you portfolio. LinkedIn profile.-->
    <!--      </h4>-->

    <EditableText :value.sync="skillsSec.sectionTitle" :movable="true"/>



    <div class="section-inner" ref="sectionInner">
      <SkillItem v-for="(skill, index) in skillsSec.skills"
                 :key="index"
                 :skill="skill"
                 :index="index"
                 :should-toggle="index === skillsSec.skills.length - 1"
                 :addItemFired="addItemFired"
                 :is-selected="selectedItem"
                 @selected="handleSelected($event)"


      />
      <!-- v-for="(skillObj, index) in skillsSec.skills" :key="index"
      :skillObj="skillObj" -->
    </div>
    <button @click="addItem" class="btn add-skill">
      <PlusIcon class="icon"/> Add skill
    </button>
  </div>
</template>
<script>
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import SkillItem from './section-items/SkillItem.vue';

import EditableText from "../EditableText";

// import Vue from 'vue';
// import { mapState, mapMutations } from 'vuex';

import {mapFields} from "vuex-map-fields";

// import firebase from 'firebase/app';
// import 'firebase/storage';
// import db from '../firebase/firebaseInit';

export default {
  components: {
    PlusIcon,
    SkillItem,
    EditableText,
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
      selectedItem: false,
      addItemFired: false,
    }
  },
  computed: {
    ...mapFields([
      'resume',
      'resume.skillsSec'
    ]),

  },
  methods: {
    handleSelected (id) {


      if(id === this.selectedItem) {
        this.selectedItem = false;
      } else {
        this.selectedItem = id;
      }
    },
    enableEditing() {
      this.sectionTitleValue = this.skillsSec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.skillsSec.sectionTitle = this.sectionTitleValue;
    },
    addItem() {
      this.$store.commit('addItemObject', 'skillItem');
      this.addItemFired = true;
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
