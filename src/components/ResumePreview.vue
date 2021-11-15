<template>
<div class="resume-preview" >
  <router-link v-show="mobile === false"  class="link" :to="{ name: 'Resumes'}"
  >Geri qayt</router-link>

  <button @click="$emit('templateIs', true)" class="select-btn">templates</button>

  <button @click="downloadResume"  class="button">download!</button>
  <button v-show="mobile === true" class="exit" @click="closePreview">X</button>
<!--  <SelectTemplate />-->
  <div class="resume-wrapper">
    <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="false"
        :enable-download="true"
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
import Sherlock from "./templates/Sherlock";
import BasicThemeFuji from "../components/templates/BasicThemeFuji";
import VueHtml2pdf from 'vue-html2pdf'
// import SelectTemplate from "./SelectTemplate";
import {mapFields} from "vuex-map-fields";

export default {
  name: "ResumePreview",

  props: {
    resume: {
      type: Object,
      default: null
    },
    mobile: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  components: {
    BasicTheme,
    Sherlock,
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
    closePreview() {
      this.$emit('close');
    }
  },
  computed: {
    ...mapFields({
          // resumeObj: 'resume',
    }),
    templateName() {
      return this.$store.state.templateName;
    }
  },
  mounted() {
    // console.log(this.resumeTemplateName);
    console.log(this.$route.params.resumeid);
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

.select-btn {
  position: absolute;
  bottom: 10px;
  right: 80%;
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
