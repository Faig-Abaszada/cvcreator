<template>
  <div class="select-template-page">
<!--    Help Gadget Component for positiong-->
    <HelpGadget />


      <header>
        <button class="button-back"  @click="$emit('templateIs', false)">
          <ArrowIcon class="icon" />Back to editor
        </button>
        <div class="colors">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="btn-actions">
          <button @click="downloadResume" class="primary-button">Download PDF</button>
        </div>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="templates">
              <div class="row">

                <div class="col-lg-6">
                  <div class="template-card" @click="updateTemplateName('Sherlock')">
                    <h2>Sherlock</h2>
                    <img  :src='require("@/assets/templates/cvform.webp")'>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="template-card" @click="updateTemplateName('BasicTheme')">
                    <h2>BasicTheme</h2>
                    <img  :src='require("@/assets/templates/cvform2.webp")'>
                  </div>
                </div>
                <div class="test-height"></div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="select-page-preview preview">
              <div class="resume-wrapper">
                <vue-html2pdf
                    ref="html2Pdf"
                    :show-layout="false"
                    :float-layout="false"
                    :enable-download="true"
                    :filename="this.resume.resumeDocName"
                    :manual-pagination="true"
                    pdf-format="a4"
                >
                  <section slot="pdf-content">
                  <component :is="this.resume.templateName" :resume="this.resume"></component>
                  </section>
                </vue-html2pdf>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>

</template>
<script>
import ResumePreview from "./ResumePreview";
import {mapFields} from  "vuex-map-fields";

import 'firebase/storage';
import db from '../firebase/firebaseInit';

import BasicTheme from '../components/templates/BasicTheme.vue';
import Sherlock from "./templates/Sherlock";

import VueHtml2pdf from 'vue-html2pdf';
import HelpGadget from "./common/HelpGadget";
import ArrowIcon from "../assets/Icons/create-cv/arrow-right.svg";

export default {
  name: "SelectTemplate",
  components: {
    ResumePreview,
    BasicTheme,
    Sherlock,
    VueHtml2pdf,
    HelpGadget,
    ArrowIcon
  },
  computed: {
    ...mapFields([
      'resume'
    ])
  },
  methods: {
    async updateTemplateName(templateName) {
      this.resume.templateName = templateName;
      const resumeDB = await db.collection('resumes').doc(this.$route.params.resumeid);

      await resumeDB.update({
        templateName: templateName
      });
      this.$emit('updatedTemplateName');

    },
    downloadResume() {
      this.$refs.html2Pdf.generatePdf()
    }

  }

}
</script>
<style lang="scss" scoped>
.help-gadget {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.select-page-preview {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  .resume-wrapper {
    transform: scale(0.7);
  }
}
.preview {
  position: initial;
  width: 100%;
  overflow-y: scroll !important;
  padd

  .resume-doc {
    //transform: scale(0.9) !important;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 15px 25px;
  color: #fff;

  //position: fixed;
  //top: 0;
  //left: 0;
  //right: 0;
  //z-index: 103;
  //display: none;

  .colors {
    display: flex;

    * {
      height: 32px;
      width: 32px;
      background-color: #1eb8b8;
      border-radius: 50%;
    }
  }
  .button-back {
    color: #fff;
    border-radius: 50px;
    padding: 5px 15px;
    &:hover {
      background-color: #303030;
    }
    .icon {
      width: 25px;
      transform: rotate(180deg);
    }
  }
}

.select-template-page {
  background-color: rgb(122, 133, 153);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  //width: 100%;
  //height: auto;
  z-index: 110;
  display: flex;
  flex-direction: column;
}
//.overlayed {
//  position: absolute;
//  top: 0;
//  right: 0;
//  bottom: 0;
//  left: 0;
//  height: 100%;
//  width: 100%;
//}

.templates {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 100px;
  padding-right: 20px;
  border-right: 1px solid #abaaaa;

  .template-card {
    &:hover {
      cursor: pointer;
    }
    h2 {
      font-size: 16px;
      text-align: center;
      color: #fff;
    }

    img {
      width: 100%;
    }
  }
  .test-height {
    height: 2000px;
  }

}

.select-template-page {
  .edit-resume-buttons {
    position: absolute;
    top: 0;
  }
}
</style>
<style>
.create-cv-wrapper {
  overflow: hidden;
}
</style>
