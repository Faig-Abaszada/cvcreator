<template>
  <!-- inner -->
  <div class="item-wrapper">
    <div class="item">
      <div class="header-wrapper">
        <MoveIcon class="icon move-icon" />
        <DeleteIcon class="icon delete-icon" />
        <div class="header" @click="showJobDetail = !showJobDetail">
          <div>
            <h2 class="title">{{ skillObj.skill }}</h2>
            <span>{{ skillObj.skillLevel }}</span>
          </div>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <div class="info" v-show="showJobDetail">
        <div class="inputs">
          <div class="input">
            <label for="first-name">Skill</label>
            <input
              :blur="handleBlur"
              type="text"
              id="first-name"
              v-model="skillObj.skill"
            />
          </div>
          <div class="input">
            <label for="last-name">Level ---<span> Expert</span></label>
            <input type="text" id="last-name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoveIcon from '../../../assets/Icons/create-cv/movement.svg';
import ArrowIcon from '../../../assets/Icons/create-cv/arrow-right.svg';
import DeleteIcon from '../../../assets/Icons/create-cv/delete.svg';

import { mapState } from 'vuex';

export default {
  components: {
    MoveIcon,
    ArrowIcon,
    DeleteIcon,
  },
  props: ['skillObj'],
  data() {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      showJobDetail: false,
    };
  },
  computed: mapState(['skillsSec']),
  methods: {
    handleBlur() {
      this.$emit();
    },
  },
};
</script>
<style lang="scss" scoped>
.inner {
  .title {
    span {
      color: rgb(139, 139, 139);
    }
  }
}
</style>