<template>
  <div>
    <MoveIcon class="icon move-icon" v-show="!docName"/>
    <h2 class="title" v-if="!editing">
      {{ this.value}}<span v-show="docName">.pdf</span>
    </h2>

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
           v-model="editableTextValue"
    >

  </div>
</template>

<script>
import EditIcon from '../assets/Icons/create-cv/editicon.svg';
import MoveIcon from '../assets/Icons/create-cv/movement.svg';



export default {
  name: "editableText",
  components: {
    EditIcon,
    MoveIcon,
  },
  props: [
    'value',
    'docName'
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

<style scoped>

</style>
