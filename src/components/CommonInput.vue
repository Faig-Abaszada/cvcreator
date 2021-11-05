<template>
<div>
  <input v-model="commonInputValue" type="text" id="last-name" />
</div>
</template>

<script>
export default {
  name: "commonInput",
  data() {
    return {
      commonInputValue: null
    }
  },
  props: ['inputValue'],
  watch: {
    commonInputValue(val) {
      this.$emit('update:inputValue', val)
    }
  },
  mounted() {
    setTimeout(() =>{
      this.commonInputValue = this.inputValue;

    },2000)
  }
}
</script>

<style scoped>

</style>
