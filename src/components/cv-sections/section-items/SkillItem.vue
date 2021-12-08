<template>
  <!-- inner -->
  <div class="item-wrapper skill-wrapper">

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
          <div>
            <label for="last-name">Level ---<span> {{ skill.level }}</span></label>
<!--            <CommonInput :inputValue.sync="skill.level" />-->
            <div class="radio-buttons">
<!--              <input type="radio" value='Beginner' v-model="skill.level">-->
<!--              <input type="radio" value='Experienced' v-model="skill.level">-->
<!--              <input type="radio" value="Expert" v-model="skill.level">-->

<!--              <label for="input1"></label>-->
<!--              <input  id="input1" name="radio" type="radio" value='Beginner' v-model="skill.level" />-->
<!--              <label for="input2"></label>-->
<!--              <input  id="input2" name="radio" type="radio" value='Experienced' v-model="skill.level" />-->
<!--              <label for="input3"></label>-->
<!--              <input  id="input3" name="radio" type="radio" value='Expert' v-model="skill.level"/>-->

              <div>
                <label>
                  <input type="radio" class="option-input radio" name="example" value='Expert' v-model="skill.level" checked />
                  Expert
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example"  value='Experienced' v-model="skill.level"/>
                  Experienced
                </label>
                <label>
                  <input type="radio" class="option-input radio" name="example" value='Beginner' v-model="skill.level" />
                  Beginner
                </label>
              </div>

            </div>
            </div>
          </div>
<!--        </div>-->
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
.skill-wrapper {
  //.radio-buttons {
  //  display: flex;
  //
  //
  //  input[type="radio"] {
  //    display: none;
  //  }
  //  label {
  //    width: 20px;
  //    height: 20px;
  //    background-color: #2196f3;
  //    margin: 0 10px;
  //  }
  //
  //}

  @keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }

  .option-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 13.33333px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 40px;
    transition: all 0.15s ease-out 0s;
    background: #cbd1d8;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;
  }
  .option-input:hover {
    background: #9faab7;
  }
  .option-input:checked {
    background: #000;
  }
  .option-input:checked::before {
    height: 40px;
    width: 40px;
    position: absolute;
    content: '✔';
    display: inline-block;
    font-size: 26.66667px;
    text-align: center;
    line-height: 40px;
  }
  .option-input:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: #000;
    content: '';
    display: block;
    position: relative;
    z-index: 100;
  }
  .option-input.radio {
    //border-radius: 50%;
  }
  .option-input.radio::after {
    //border-radius: 50%;
  }


  body label {
    display: block;
    line-height: 40px;
  }


}
</style>
