<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="header-wrapper">
        <MoveIcon class="icon move-icon" />
        <DeleteIcon class="icon delete-icon" />
        <div class="header" @click="showJobDetail = !showJobDetail">
          <h2 class="title">Unibank Bank</h2>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <div class="info" v-show="showJobDetail">
        <div class="inputs">
          <div class="inputs">
            <div class="input">
              <label for="first-name">Job title</label>
              <input type="text" id="first-name" />
            </div>
            <div class="input">
              <label for="last-name">Employer</label>
              <input type="text" id="last-name" />
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
                  v-model="this.date"
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
              <input type="text" id="last-name" />
            </div>
          </div>
        </div>
        <h4 class="subtitle">
          Include 2-3 clear sentences about your overall experience
        </h4>
        <div class="editor">
          <vue-editor
            :editorOptions="editorSettings"
            v-model="blogHTML"
            useCustomImageHandler
            @image-added="imageHandler"
            :editorToolbar="customToolbar"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoveIcon from '../assets/Icons/create-cv/movement.svg';
import ArrowIcon from '../assets/Icons/create-cv/arrow-right.svg';
import DeleteIcon from '../assets/Icons/create-cv/delete.svg';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    MoveIcon,
    ArrowIcon,
    DeleteIcon,
    DatePicker,
  },
  data() {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      showJobDetail: false,
      date: '',
    };
  },
  methods: {
    // customFormatter(date) {
    //   return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    // },
  },
};
</script>
<style lang="scss" scoped>
</style>