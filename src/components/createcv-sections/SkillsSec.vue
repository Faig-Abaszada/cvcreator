<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">
        <MoveIcon class="icon move-icon" />Skills<EditIcon class="icon" />
      </h2>
      <h4 class="subtitle">
        You can add links to websites you want hiring managers to see! Perhaps
        it will be a link to you portfolio. LinkedIn profile.
      </h4>
    </div>
    <div class="section-inner">
      <SkillItem />
    </div>
    <button class="btn"><PlusIcon class="icon" /> Add skill</button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import SkillItem from '../../components/SkillItem.vue';

export default {
  components: {
    MoveIcon,
    PlusIcon,
    EditIcon,
    SkillItem,
  },
  data() {},
  methods: {},
};
</script>
<style lang="scss">
</style>