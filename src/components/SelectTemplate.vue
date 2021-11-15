<template>
  <div class="wrapper s-p">
    <div class="overlayed">
      <header>
        <button  @click="$emit('templateIs', false)">Back to editor</button>
        <div class="colors">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="btn-actions">
<!--          <button class="download">Download PDF</button>-->
<!--          <button class="more-action">...</button>-->
        </div>
      </header>
      <div class="container">
        <div class="row ">
          <div class="col-3 ">
            <div class="row templates">
              <div class="col-lg-6">
                <div class="template" @click="updateTemplateName('Sherlock')">
                  <h2>Sherlock</h2>
                  <img  :src='require("@/assets/templates/cvform.webp")'>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="template" @click="updateTemplateName('BasicTheme')">
                  <h2>BasicTheme</h2>
                  <img  :src='require("@/assets/templates/cvform2.webp")'>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <ResumePreview class="preview"  :resume="this.resume"/>
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

export default {
  name: "SelectTemplate",
  components: {
    ResumePreview
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

  }

}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .colors {
    display: flex;

    * {
      height: 32px;
      width: 32px;
      background-color: #1eb8b8;
      border-radius: 50%;
    }
  }
}
.template {
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

.wrapper {
  background-color: rgb(34, 34, 34,);
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
.overlayed {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.templates {
  overflow-y: scroll !important;
  height: 100vh;
  position: initial;
}
.preview {
  position: initial;
  width: 100%;
  overflow-y: scroll !important;

  .resume-doc {
    transform: scale(0.9) !important;
  }
}

</style>
