<template>
  <div class="section-item-wrapper">
    <div class="section-item">
      <div class="section-item-header-wrapper">
        <MoveIcon class="icon move-icon" />
        <DeleteIcon class="icon delete-icon" />
        <div
          class="section-item-header"
          @click="showEduDetail = !showEduDetail"
        >
          <h2 class="section-item-title">Azerbaijan Technical University</h2>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <div class="section-item-info" v-show="showEduDetail">
        <div class="inputs">
          <div class="inputs">
            <div class="input">
              <label for="first-name">School</label>
              <input type="text" id="first-name" />
            </div>
            <div class="input">
              <label for="last-name">Degree</label>
              <input type="text" id="last-name" />
            </div>
          </div>
        </div>
        <div class="inputs">
          <div class="inputs">
            <div class="input">
              <label for="first-name">Start & End Date</label>
              <input type="text" id="first-name" />
            </div>
            <div class="input">
              <label for="last-name">City</label>
              <input type="text" id="last-name" />
            </div>
          </div>
        </div>
        <h4 class="section-subtitle">Description</h4>
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

export default {
  components: {
    MoveIcon,
    ArrowIcon,
    DeleteIcon,
  },
  data() {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      showEduDetail: false,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>