<template>
  <div>
    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>
      <div class="cvbuilder-nav">
        <button>Resumes</button>
        <button>+ Create New</button>
      </div>

      <h2>
        <router-link class="link" :to="{ name: 'EditCv' }"
          >+ Create New</router-link
        >
      </h2>
    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
import 'firebase/storage';
// import db from '../firebase/firebaseInit';

export default {
  name: 'App',
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