<template>
<div class="resume-preview" >
  <router-link v-show="mobile === false"  class="link" :to="{ name: 'Resumes'}">
    <XIcon class="icon"/>
  </router-link>


  <button v-show="mobile === true" class="exit" @click="closePreview">X</button>
<!--  <SelectTemplate />-->

  <div class="resume-and-content-container">
    <div class="resume-wrapper">

      <vue-html2pdf
          ref="html2Pdf"
          :show-layout="false"
          :float-layout="false"
          :enable-download="true"
          :filename="resume.resumeDocName"
          :manual-pagination="true"
          pdf-format="a4"
      >

        <section slot="pdf-content">
          <component :is="resume.templateName" :resume="resume"></component>
        </section>

      </vue-html2pdf>

      <div class="edit-resume-buttons">
        <button @click="$emit('templateIs', true)" class="select-btn primary-button">
          <SquaresIcon class="icon" />Select template
        </button>
        <button @click="downloadResume"  class="button primary-button">
          Download PDF
        </button>
        <HelpGadget />
      </div>


    </div>
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

import XIcon from "../assets/Icons/create-cv/close-x.svg";
import SquaresIcon from "../assets/Icons/create-cv/squares.svg";
import HelpGadget from "./common/HelpGadget";


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
    // SelectTemplate,
    XIcon,
    SquaresIcon,
    HelpGadget,
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
  background-color: rgb(122, 133, 153);
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;


}

.resume-wrapper {
  transform: scale(0.53);
  @media (max-width: 800px) {
    transform: scale(0.4);
    position: absolute;

  }


}

.link,
.exit{
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  background-color: rgba(34, 34, 34, 0.4);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(34, 34, 34, 0.58);
  }


  .icon {
    width: 30px;
    height: 30px;
  }
}

.button {
  //position: absolute;
  //bottom: 10px;
  //right: 50%;
  //transform: translateX(50%);
  //background-color: #f1f1f1;
  //color: #222222;
}

.select-btn {
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 50px;

  &:hover {
    background-color: #303030;
  }
  .icon {
    width: 50px;
  }
}

.edit-resume-buttons {
  width: 100%;
  position: absolute;
  bottom: -100px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 35px;
    padding: 10px 30px;
  }

  .help-gadget {
    position: absolute;
    right: -200px;
  }
}

</style>
