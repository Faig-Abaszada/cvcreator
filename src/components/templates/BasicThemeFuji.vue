<template>
  <div class="fuji">
    <li>First name: {{this.FirstName}}</li>
    <li>Last name: </li>
    <li>Email:</li>
    <li>Phone:</li>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';
export default {
  name: 'BasicThemeFuji',
  computed: {
    // ...mapGetters(['resumeGetterTest']),
    // currentResume() {
    //   return this.resumeGetterTest(this.$route.params.resumeid);
    // },
    ...mapFields([
      'resume.personalDetailsSec.FirstName'
    ]),
  },
};
</script>
<style>
.fuji {
  background-color: #000000;
  /*height: 100vh;*/
}
</style>
