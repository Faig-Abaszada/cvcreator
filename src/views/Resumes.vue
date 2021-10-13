<template>
  <div>
    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>
      <div class="cvbuilder-nav">
        <button>Resumes</button>
        <button>+ Create New</button>
      </div>
      <Template />
      <h2>
        <!-- <router-link class="link" :to="{ name: 'EditCv' }"
          >+ Create New</router-link
        > -->

        <button @click="createCv">+ Create New</button>
      </h2>
    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import db from '../firebase/firebaseInit';
import Template from '../components/templates/BasicTheme.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Resumes',
  components: { Template },
  data() {
    return {
      resumes: [],
    };
  },
  methods: {
    ...mapActions(['createResume']),
    async createCv() {
      this.createResume();
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
  },
  created() {
    this.unwatch = this.$store.watch(
      (state) => state.resumeDocName,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
    );
  },
};
</script>
<style lang="scss">
.cvbuilder-wrapper {
  padding: 100px;
  height: 100vh;
}
.cvbuilder-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  a {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>