<template>
  <div>

<!--    <test :inputModel.sync="person.name"/>-->

    <test :inputModel="person.name" @update:inputModel="inputValue = $event"/>

    {{ this.inputValue }}



  </div>
</template>

<script>
import test from "./test";
export default {
  name: "parent",
  components: {
    test
  },
  data() {
    return {
      inputValue: null,
    }
  },
  computed: {
    person() {
      return this.$store.getters.person
    }
  },
}
</script>

<style scoped>

</style>
