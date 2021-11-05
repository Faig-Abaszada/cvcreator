<template>
  <div>
    <input
      :inputValue="inputValue"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "commonInput",
  data() {
    return {
      commonInputValue: this.inputValue
    }
  },
  props: ['inputValue'],
  // watch: {
  //   commonInputValue(val) {
  //     this.inputValue = val;
  //   }
  // }

}
</script>

<style scoped>

</style>
