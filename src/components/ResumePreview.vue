<template>
<div class="resume-preview">
  <router-link class="link" :to="{ name: 'Resumes'}"
  >Geri qayit</router-link>

  <div class="resume-wrapper">
    <component :is="resume.templateName" :resume="resume"></component>
  </div>
</div>
</template>

<script>
import BasicTheme from '../components/templates/BasicTheme.vue';
import BasicThemeFuji from "../components/templates/BasicThemeFuji";
export default {
  name: "ResumePreview",
  props: ['resume'],
  components: {
    BasicTheme,
    BasicThemeFuji
  }
}
</script>

<style lang="scss" scoped>
.resume-preview {
  height: 100vh;
  width: 50%;
  background-color: #222222;
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resume-wrapper {
  transform: scale(0.5);
}
.link {
  position: absolute;
  top: 40px;
  right: 40px;
  color: #fff;
}
</style>
