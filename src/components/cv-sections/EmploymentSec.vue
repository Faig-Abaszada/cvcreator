<template>
  <div class="section">
    <div class="section-header">
      <MoveIcon class="icon move-icon" />
      <h2 class="title" v-if="!editing">
        {{ employmentHistorySec.sectionTitle }}
      </h2>
<!--            <h4 class="subtitle">-->
<!--              Include your last 10 years of relevant experience and dates in this-->
<!--              section. List your most recent position first.-->
<!--            </h4>-->
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
import {mapFields} from "vuex-map-fields";

export default {
  // props: ['employmentHistorySec'],
  components: {
    EditIcon,
    MoveIcon,
    PlusIcon,
    JobItem,
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
    };
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
    enableEditing() {
      this.sectionTitleValue = this.employmentHistorySec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.employmentHistorySec.sectionTitle = this.sectionTitleValue;
    }
  },
  computed: {
    ...mapFields([
      'resume',
      'resume.employmentHistorySec'

    ])
  }
};
</script>
<style lang="scss">
</style>
