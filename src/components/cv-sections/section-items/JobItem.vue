<template>
  <div class="item-wrapper">

    <DeleteItemModal v-show="deleteModal"
                 @close-modal="deleteModal = false"
                 :deleteModal="true"
                 @deleteItemEmit="deleteItemFunc"
    />

    <div class="item">
      <div class="header-wrapper">
        <MoveIcon class="icon move-icon" />
        <DeleteIcon class="icon delete-icon" @click="deleteModal = true"/>
        <div class="header" @click="handleClick">
<!--          <div class="header" @click="toggleItem">-->
          <h2 class="title">{{experience.position}}</h2>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <div class="info" v-show="iAmSelected">
        <div class="inputs">
          <div class="inputs">
            <div class="input">
              <label >Job title</label>
              <CommonInput ref="commonInputComp" :inputValue.sync="experience.position"/>
            </div>
            <div class="input">
              <label >Company</label>
              <CommonInput :inputValue.sync="experience.employer"/>
            </div>

          </div>
        </div>
        <div class="inputs">
          <div class="inputs">
            <div class="input">
              <!-- <label for="first-name">Job title</label>
              <input type="text" id="first-name" /> -->
              <form>
                <DatePicker
                  class="date-input"
                  v-model="experience.startAndEndDate"
                  lang="en"
                  type="month"
                  format="MMMM-YYYY"
                />
                <DatePicker
                  class="date-input"
                  v-model="date"
                  lang="en"
                  type="month"
                  format="MMMM-YYYY"
                />
              </form>
            </div>
            <div class="input">
              <label for="last-name">City</label>
              <CommonInput :inputValue.sync="experience.city"/>
            </div>
          </div>
        </div>
        <h4 class="subtitle">
          Include 2-3 clear sentences about your overall experience
        </h4>
        <div class="editor">
          <vue-editor v-model="blogHTML" useCustomImageHandler />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoveIcon from '../../../assets/Icons/create-cv/movement.svg';
import ArrowIcon from '../../../assets/Icons/create-cv/arrow-right.svg';
import DeleteIcon from '../../../assets/Icons/create-cv/delete.svg';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

import CommonInput from "../../CommonInput";

import DeleteItemModal from "../../common/DeleteItemModal";
export default {
  components: {
    MoveIcon,
    ArrowIcon,
    DeleteIcon,
    DatePicker,
    CommonInput,

    DeleteItemModal
  },
  data() {
    return {
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      showJobDetail: false,
      date: '',
      deleteModal: false,
    };
  },
  props: [
      'experience',
      'index',
      'shouldToggle',
      'addItemFired',
      'isSelected'
  ],
  computed:{
    iAmSelected () {
      return this.isSelected === this.index;
    }
  },
  methods: {
    handleClick () {
      this.$emit('selected', this.index);
      setTimeout(()=> {
        this.$refs.commonInputComp.focusInput();
      },10)
      console.log(this.isSelected)
    },
    toggleItem(){
      this.showJobDetail = !this.showJobDetail;
      setTimeout(()=> {
        this.$refs.commonInputComp.focusInput();
      },10)
    },
    // customFormatter(date) {
    //   return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    // },
    deleteItemFunc(){
      this.$store.commit('deleteItemObject', {
        itemType: 'jobItem',
        index: this.index
      });
    },

  },
  mounted() {
    setTimeout(() => {
      if (this.shouldToggle && this.addItemFired) {
        this.handleClick();
      }
      // else {
      //   this.showJobDetail = false;
      // }
    }, 10);
  },
};
</script>
<style lang="scss" scoped>
.isActive{
  color:green
}
</style>
