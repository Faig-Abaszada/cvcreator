<template>
  <div class="section">


    <EditableText :value.sync="employmentHistorySec.sectionTitle" :movable="true"/>

    <div class="section-inner" ref="sectionInner">

      <JobItem v-for="(experience, index) in employmentHistorySec.employmentHistories"
               :key="experience.id"
               :experience="experience"
               :index="index"
               ref="jobItemComp"
               :should-toggle="index === employmentHistorySec.employmentHistories.length - 1"
               :addItemFired="addItemFired"
               :is-selected="selectedItem"
               @selected="handleSelected($event)"
      />
<!--      :should-toggle="index === employmentHistorySec.employmentHistories.length - 1"-->

    </div>

    <button @click="addItem" class="btn add-employment">
      <PlusIcon class="icon" /> Add employment
    </button>
  </div>
</template>
<script>

import PlusIcon from '../../assets/Icons/create-cv/plus-blue.svg';

// import Vue from 'vue';

import JobItem from './section-items/JobItem.vue';
import EditableText from "../EditableText";
import {mapFields} from "vuex-map-fields";

export default {
  // props: ['employmentHistorySec'],
  components: {
    PlusIcon,
    JobItem,
    EditableText
  },
  data() {
    return {
      editing: false,
      sectionTitleValue: null,
      addItemFired: false,
      selectedItem: false,
    };
  },
  methods: {
    handleSelected (id) {


      if(id === this.selectedItem) {
        this.selectedItem = false;
      } else {
        this.selectedItem = id;
      }
    },
    addItem() {
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
      // this.$refs.jobItemComp.shouldToggleFunc();
      this.addItemFired = true;
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
  created() {
    // let count = 0;
    //
    // this.employmentHistorySec.employmentHistories.forEach(item => {
    //   item.index = count;
    //   count++;
    // });

    // console.log(this.items);
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
