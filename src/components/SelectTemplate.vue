<template>
  <div class="select-template-page">
<!--    Help Gadget Component for positiong-->
    <HelpGadget />
      <header>

        <button class="button-back"  @click="$emit('templateIs', false)">
          <ArrowIcon class="icon" />Back to editor
        </button>

        <div class="btn-actions">
          <button @click="downloadResume" class="primary-button">Download PDF</button>
        </div>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-3 d-none">
            <div class="templates">
              <div class="row">

                <div class="col-lg-6 mb-2">
                  <div class="template-card" @click="updateTemplateName('Sherlock')" >
                    <h2>Sherlock</h2>
                    <div class="img-container" :class="{ active: this.resume.templateName === 'Sherlock' }">
                      <img :src='require("@/assets/templates/cvform.webp")'>
                      <TickIcon class="icon"/>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="template-card" @click="updateTemplateName('BasicTheme')">
                    <h2>BasicTheme</h2>
                    <div class="img-container" :class="{ active: this.resume.templateName === 'BasicTheme' }">
                      <img  :src='require("@/assets/templates/cvform2.webp")'>
                      <TickIcon class="icon"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="select-page-preview">
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
import TickIcon from "../assets/Icons/create-cv/tick.svg";

export default {
  name: "SelectTemplate",
  components: {
    ResumePreview,
    BasicTheme,
    Sherlock,
    VueHtml2pdf,
    HelpGadget,
    ArrowIcon,
    TickIcon
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
@media (max-width: 800px) {


}

.select-template-page {
  background-color: rgb(79, 82, 89);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 110;
  display: flex;
  flex-direction: column;
}
.help-gadget {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.select-page-preview {
  //position: fixed;
  //right: 0;
  //top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  overflow-y: scroll !important;

  .resume-wrapper {
    transform: scale(0.7);
  }
  .resume-doc {
    //transform: scale(0.9) !important;
  }


    @media(max-width: 800px) {
      align-items: end;
      .resume-wrapper {
        transform: scale(0.4) !important;
        position: relative;
        top: 70px;
      }


    }

}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 15px 25px;
  color: #fff;

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

.templates {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 20px 30px 20px 20px;

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

    .img-container {
      position: relative;
      border-radius: 5px;

      &:hover {
        box-shadow: 0 0 1px 3px rgb(33, 150, 243);
      }

      img {
        position: relative;
        width: 100%;
        border-radius: 5px;

      }
      .icon {
        color: #fff;
        width: 40px;
        height: 40px;
        padding: 5px;
        background-color: rgb(33, 150, 243);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
      }

    }
    .active {
      box-shadow: 0 0 1px 3px rgb(33, 150, 243);

      .icon {
        display: block;
      }
    }
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
