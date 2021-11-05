<template>
  <div>
    <input v-model="personInput" type="text">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      personInput: this.inputModel
    }
  },
 props: {
    inputModel: {}
 },
  watch: {
    personInput(val) {
      this.$emit('update:inputModel', val)
    }
  }
}
</script>

<style scoped>

</style>
