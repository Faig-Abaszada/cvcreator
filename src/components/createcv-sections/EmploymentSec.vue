<template>
  <div class="section">
    <div class="section-header">
      <h2 class="title">
        <MoveIcon class="icon move-icon" />Employment History<EditIcon
          class="icon"
        />
      </h2>
      <h4 class="subtitle">
        Include your last 10 years of relevant experience and dates in this
        section. List your most recent position first.
      </h4>
    </div>

    <div class="section-inner">
      <JobItem />
      <JobItem />
    </div>

    <button class="btn"><PlusIcon class="icon" /> Add employment</button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

import JobItem from '../../components/JobItem.vue';

export default {
  components: {
    EditIcon,
    MoveIcon,
    PlusIcon,
    JobItem,
  },
  data() {},
  methods: {},
};
</script>
<style lang="scss">
</style>