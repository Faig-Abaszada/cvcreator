<template>
  <div class="editable-text">
    <MoveIcon class="icon move-icon" v-show="movable"/>
    <h2 class="title" v-if="!editing">
      {{ this.value}}
      <span v-show="fieldName === 'document-name'">.pdf</span>
    </h2>

    <label v-show="!editing"
           for="personalDetailsSec"
           @click="enableEditing"
    >
      <EditIcon class="icon edit-icon" />
    </label>

    <input class="title-input"
           type="text"
           v-if="editing"
           id="personalDetailsSec"
           @blur="disableEditing"
           @keyup.enter="disableEditing"
           v-model="editableTextValue"
    >

  </div>
</template>

<script>
import EditIcon from '../assets/Icons/create-cv/edit-light.svg';
import MoveIcon from '../assets/Icons/create-cv/movement.svg';



export default {
  name: "editableText",
  components: {
    EditIcon,
    MoveIcon,
  },
  props: [
    'value',
    'fieldName',
    'movable'

  ],
  data() {
    return {
      editing: false,
      editableTextValue: null,
    }
  },
  methods: {
    enableEditing() {
      this.editableTextValue = this.value;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.$emit('update:value', this.editableTextValue );
      // propsdan gelen deyeri deyisirik = this.editableTextValue;
    },
  }
}
</script>

<style lang="scss" scoped>
.editable-text {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .title {
    line-height: 50px;
    font-size: 24px;
    //margin-right: 10px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    display: flex;
    align-items: center;
    visibility: hidden;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    color: #838383;
  }
  &:hover .icon {
    visibility: initial !important;
  }
  .move-icon {
    margin-left: -24px;
    height: 24px;

  }
  .edit-icon {
    height: 26px;


    &:hover {
      color: #2196f3;
    }
  }

  .title-input {
    line-height: 50px;
    font-size: 24px;
    outline: none;
    border: 0;
    box-shadow: 0 2px 0 0px #2196f3;
    padding: 0 !important;
  }

  .subtitle {
    color: rgb(152, 161, 179);
    font-weight: initial;
    font-size: 14px;
    margin-bottom: 8px;
  }
}

</style>
