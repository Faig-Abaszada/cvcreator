<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">
        <MoveIcon class="icon move-icon" />Education<EditIcon class="icon" />
      </h2>
      <h4 class="subtitle">
        If relevant, include your most recent educational achievments and the
        dates here.
      </h4>
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

export default {
  components: {
    EduItem,
    MoveIcon,
    PlusIcon,
    EditIcon,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
</style>