<template>
<div class="resume-preview">
  <router-link v-show="mobile" class="link" :to="{ name: 'Resumes'}"
  >Geri qayt</router-link>
  <button @click="downloadResume" class="button">download!</button>
  <button class="exit" @click="exitPreview">X</button>

<!--  <SelectTemplate />-->

  <div class="resume-wrapper">
    <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="true"
        filename="asan-cv"
        :manual-pagination="true"
        pdf-format="a4"
    >
      <section slot="pdf-content">
        <component :is="resume.templateName" :resume="resume"></component>
      </section>
    </vue-html2pdf>
  </div>



</div>
</template>

<script>
import BasicTheme from '../components/templates/BasicTheme.vue';
import BasicThemeFuji from "../components/templates/BasicThemeFuji";
import VueHtml2pdf from 'vue-html2pdf'

// import SelectTemplate from "./SelectTemplate";

export default {
  name: "ResumePreview",
  props: ['resume'],
  data() {
    return {
    }
  },
  components: {
    BasicTheme,
    BasicThemeFuji,
    VueHtml2pdf,
    // SelectTemplate
  },
  methods: {
    downloadResume() {
      // // let w = window.open();
      // document.write(this.$refs.DownloadComp.$el.innerHTML);
      // document.close();
      // setTimeout(function () {
      //   print()
      // }, 1000);
      //
      // const doc = new jsPDF();
      // const downloadFile = this.$refs.DownloadComp.$el.innerHTML;
      // doc.text(downloadFile, 100, 100);
      // doc.save("a4.pdf");
      //
      this.$refs.html2Pdf.generatePdf()
    },
    exitPreview() {
      this.$store.commit('setScreenMobility', false)
      console.log(this.$store.state.mobile)
    }
  },
  computed: {
    mobile() {
      return this.$store.state.mobile;
    }
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
  @media (max-width: 800px) {
    transform: scale(0.4);
    position: absolute;

  }
}
.link,
.exit{
  position: absolute;
  top: 40px;
  right: 40px;
  color: #fff;
}

.button {
  position: absolute;
  bottom: 10px;
  right: 50%;
  transform: translateX(50%);
  background-color: #f1f1f1;
  color: #222222;
}



//.s-temp {
//  position: absolute;
//  top: 0;
//  left: 0;
//  z-index: 100;
//}

</style>
