<template>
<div class="resume-card">
  <div @click="editResume(resume.resumeID)">
    <component :is="resume.templateName" :resume="resume"></component>
  </div>
    <div class="content">
      <h2>Senedin ismi</h2>
      <p>Updated 27 October, 14:08</p>
      <button @click="editResume(resume.resumeID)">
        Edit
      </button>
    </div>
</div>
</template>
<script>
import BasicTheme from "../components/templates/BasicTheme";
import Sherlock from "./templates/Sherlock";
import BasicThemeFuji from "../components/templates/BasicThemeFuji";
export default {
  name: "ResumeCard",
  components: {
    BasicTheme,
    Sherlock,
    BasicThemeFuji
  },
  props: ['resume'],
  methods: {
    async editResume(id) {
      this.loading = true;
      const currentResume = await this.$store.state.resumes.filter((resume) => {
        return resume.resumeID === id;
      });
      this.$store.commit('setResumeSate', currentResume);

      this.loading = false;
      this.$router.push({
        name: 'EditResume',
        params: { resumeid: id },
      });
    }
  }

}
</script>
<style lang="scss" scoped>
.resume-card {
  width: 450px;
  height: 228px;
  position: relative;
  margin-bottom: 20px;
  margin-right: 40px;
  .resume-doc {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.2);
    transform-origin: 0 0;
    border: 2px solid #000;
    border-radius: 30px;
    cursor: pointer;
  }
  .content {
    position: absolute;
    right: 40px;
  }
}


</style>
