<template>
  <div>
    <jobItemTest  :is-selected="selectedItem"/>
    <jobItemTest  :is-selected="selectedItem"/>
  </div>
</template>
<script>
import jobItemTest from "../components/test/jobItemTest";
export default {
  name: "TestPage",
  components: {
    jobItemTest
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {

  },
  computed: {

  },

}
</script>
