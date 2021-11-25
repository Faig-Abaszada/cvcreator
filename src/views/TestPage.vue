<template>
  <div>
<!--    <div class="cards">-->
<!--      <div class="card">-->
<!--        <div class="pdf-wrapper">-->
<!--          <Pdf />-->
<!--        </div>-->
<!--        <div class="content">-->
<!--          <p>Faig Abaszada</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card">-->
<!--        <div class="pdf-wrapper">-->
<!--          <Pdf />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="resume-cards">
      <div class="resume-card">
        <div class="pdf-container">
          <ResumeCardTest v-for="(resume, index) in resumes" :key="index" :resume="resume"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Pdf from "../components/test/Pdf";
import ResumeCardTest from "../components/ResumeCardTestTwo";
import {mapFields} from "vuex-map-fields";
export default {
  name: "TestPage",
  components: {
    // Pdf,
    ResumeCardTest,
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    // resumes() {
    //   return this.$store.state.resumes;
    // },
    ...mapFields(['resumes'])
  },
  async mounted() {
    // await this.$store.dispatch('getResumes');
    await this.$store.dispatch('getCurrentUser');
    await this.$store.dispatch('getResumes', this.profileId);
  },
}
</script>

<style scoped lang="scss">

.cards {
  display: flex;

  .card {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    border: 2px solid #000;

    .pdf-wrapper {
      transform: scale(0.5);
      transform-origin: 0 0;
      margin-right: calc(300px * -0.5);
      margin-bottom: calc(500px * -0.5);

      .pdf-page {

        //border: 2px solid red;
        //width: 200px;
        //height: 300px;
        //object-fit: cover;
      }
    }
    .content {
      position: relative;
      left: 0;

    }
  }
}
.resume-cards {
  display: flex;

  .pdf-container {
  }
}

</style>
