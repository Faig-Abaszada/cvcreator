<template>
  <!-- inner -->
  <div class="item-wrapper">

    <DeleteItemModal
        v-show="deleteModal"
        @close-modal="deleteModal = false"

        @deleteItemEmit="deleteItemFunc"
    />

    <div class="item">
      <div class="header-wrapper">
        <MoveIcon class="icon move-icon" />
        <DeleteIcon class="icon delete-icon" @click="deleteModal = true"/>
        <div class="header" @click="handleClick">
          <div>

            <h2 class="title" v-show="skill.name === null">Not specified</h2>
            <h2 class="title">{{skill.name}}</h2>

            <span>{{ skill.level }}</span>
          </div>
          <ArrowIcon class="icon" />
        </div>
      </div>
      <div class="info" v-show="iAmSelected">
        <div class="inputs">
          <div class="input">
            <label for="first-name">Skill</label>
            <CommonInput ref="commonInputComp" :inputValue.sync="skill.name" />
          </div>
          <div class="input">
            <label for="last-name">Level ---<span> Expert</span></label>
            <CommonInput :inputValue.sync="skill.level" />
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
import CommonInput from "../../CommonInput";
import DeleteItemModal from "../../common/DeleteItemModal";


export default {
  components: {
    MoveIcon,
    ArrowIcon,
    DeleteIcon,
    CommonInput,
    DeleteItemModal
  },
  props: [
      'skill',
      'index',
      'shouldToggle',
      'addItemFired',
      'isSelected'
  ],
  data() {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      deleteModal: false,

    };
  },
  computed: {
    iAmSelected() {
      return this.isSelected === this.index;
    }
  },
  methods: {
    deleteItemFunc(){
      this.$store.commit('deleteItemObject', {
        itemType: 'skillItem',
        index: this.index
      });
    },
    handleClick() {
      this.$emit('selected', this.index);
      setTimeout(() => {
        this.$refs.commonInputComp.focusInput();
      }, 10)
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.shouldToggle && this.addItemFired) {
        this.handleClick();
      }
    })
  }
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
