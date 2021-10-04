<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">
        <MoveIcon class="icon move-icon" />{{ skillsSec.sectionTitle
        }}<EditIcon class="icon" />
      </h2>
      <h4 class="subtitle">
        You can add links to websites you want hiring managers to see! Perhaps
        it will be a link to you portfolio. LinkedIn profile.
      </h4>
    </div>
    <div class="section-inner" ref="sectionInner">
      <SkillItem
        v-for="(skillObj, index) in skillsSec.skills"
        :key="index"
        :skillObj="skillObj"
      />
    </div>
    <button @click="addSkill" class="btn add-skill">
      <PlusIcon class="icon" @click="addSkill" /> Add skill
    </button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import SkillItem from '../../components/SkillItem.vue';

// import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    MoveIcon,
    PlusIcon,
    EditIcon,
    SkillItem,
  },
  computed: {
    ...mapState(['skillsSec']),
  },
  methods: {
    ...mapMutations(['addEmptySkillComp']),

    addSkill(event) {
      if (event.target && event.target.classList.contains('add-skill')) {
        const skill = {
          id: 1,
          skill: '(Not specified)',
          skillLevel: 'expert',
        };
        this.addEmptySkillComp(skill);
      }
    },
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
