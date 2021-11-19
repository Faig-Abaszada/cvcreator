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

    <div class="section-inner" ref="sectionInner">

      <JobItem v-for="experience in employmentHistorySec.employmentHistories"
               :key="experience.company"
               :experience="experience"
      />

    </div>

    <button @click="addEmployment" class="btn add-employment">
      <PlusIcon class="icon" /> Add employment
    </button>
  </div>
</template>
<script>
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../../assets/Icons/create-cv/movement.svg';
import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

// import Vue from 'vue';

import JobItem from './section-items/JobItem.vue';

export default {
  props: ['employmentHistorySec'],
  components: {
    EditIcon,
    MoveIcon,
    PlusIcon,
    JobItem,
  },
  data() {
    return {};
  },
  methods: {
    addEmployment() {
      // if (event.target && event.target.classList.contains('add-employment')) {
      //   const JobItemClass = Vue.extend(JobItem);
      //   const jobItemInstance = new JobItemClass({
      //     propsData: {
      //       isActive: this.isActive, // pass any data you need here
      //       toggleSignature: this.toggleSignature, // callback
      //     },
      //   });
      //   jobItemInstance.$mount();
      //   this.$refs.sectionInner.appendChild(jobItemInstance.$el);
      //   // event.target.parentNode.appendChild(jobItemInstance.$el);
      // }
      this.$store.commit('addItemObject', 'jobItem');

    },
  },
};
</script>
<style lang="scss">
</style>
