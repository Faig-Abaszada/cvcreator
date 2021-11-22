<template>
<!--  <div class="create-cv-wrapper" v-if="this.$store.state.resumeLoaded">-->
    <div class="create-cv-wrapper" >
    <Loading v-show="loading" />
    <SelectTemplate @templateIs="templateIs = $event" v-show="templateIs"  @updatedTemplateName="getAndSetCurrentResume"/>
      <button v-show="mobile === true" @click="mobilePreview = true" class="prev-and-down-button">
        Preview & Download <DocIcon class="icon"/>
      </button>


      <div class="create-cv">

        <div class="container">
        <h2 class="page-title">Create CV</h2>

        <router-link v-show="mobile === true"  class="exit" :to="{ name: 'Resumes'}">
          <XIcon class="icon" />
        </router-link>

        <!-- percentages -->
        <div class="create-cv-header">
          <div class="top">
            <p class="complete-percent">
              <span>25%</span> Profile completeness
            </p>
            <p class="percent">
              <span>+10%</span>Add profile summary<QuestionIcon
                class="info-icon"
              />
            </p>
          </div>
        </div>

        <div class="cv-info-fill">
          <!-- section start -->
          <PersonalDetailsSec :personalDetailsSec="this.personalDetailsSec"/>
<!--          <PersonalDetailsSec />-->
          <!-- section end -->
          <!-- section start  -->
          <SummarySec />
          <!-- section end -->
          <!-- section start  -->
          <EmploymentSec :employmentHistorySec="this.employmentHistorySec"/>
          <!-- section end -->
          <!-- section start  -->
          <EducationSec />
          <!-- section end -->
          <!-- section start  -->
          <SocialLinksSec />
          <!-- section end -->
          <!-- section start  -->
          <SkillsSec />
          <!-- section end -->
          <!-- section start  -->
          <CustomSec />
          <!-- section end -->

        </div>
        <div class="save-btn">
          <button @click="updateResume" class="save-btn primary-button">SAVE!</button>
        </div>
      </div>
    </div>
<!--    <div class="preview-resume">-->
<!--      <div class="doc">-->
<!--        <component :is="this.resume.templateName" :resume="this.resume"></component>-->
<!--      </div>-->
<!--    </div>-->
      <ResumePreview v-show="mobilePreview" :mobile="mobile" :resume="this.resume" @close="mobilePreview = !mobilePreview"
      @templateIs="templateIs = $event"
      />
<!--      <ResumePreview v-show="mobilePreview" :mobile="mobile" @close="mobilePreview = !mobilePreview"/>-->
  </div>
</template>
<script>
import QuestionIcon from '../assets/Icons/create-cv/question.svg';
import DocIcon from '../assets/Icons/create-cv/doc.svg';
import XIcon from '../assets/Icons/create-cv/close-x.svg';
import PersonalDetailsSec from '../components/cv-sections/PersonalDetailsSec.vue';
import SummarySec from '../components/cv-sections/SummarySec.vue';
import EmploymentSec from '../components/cv-sections/EmploymentSec.vue';
import EducationSec from '../components/cv-sections/EducationSec.vue';
import SocialLinksSec from '../components/cv-sections/SocialLinksSec.vue';
import SkillsSec from '../components/cv-sections/SkillsSec.vue';
import CustomSec from '../components/cv-sections/CustomSec.vue';

import ResumePreview from "../components/ResumePreview";
import Loading from "../components/common/Loading";
import {mapFields} from "vuex-map-fields";

import SelectTemplate from "../components/SelectTemplate";

import 'firebase/storage';
import db from '../firebase/firebaseInit';

export default {
  name: 'EditResume',
  components: {
    QuestionIcon,
    DocIcon,
    XIcon,
    PersonalDetailsSec,
    SummarySec,
    EmploymentSec,
    EducationSec,
    SocialLinksSec,
    SkillsSec,
    CustomSec,
    // BasicTheme,
    // BasicThemeFuji,
    ResumePreview,
    Loading,
    SelectTemplate
  },
  data() {
    return {
      templateIs: null,
      routeID: null,
      currentResume: null,
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      loading: null,
      mobile: null,
      mobilePreview: null,
      windowWidth: null,
    };
  },
  mounted() {
    // this.loading = true;
    // await this.$store.dispatch('getResumes', this.$store.state.profileId);
    // this.routeID = this.$route.params.resumeid;
    //
    // const currentResume =  await this.$store.state.resumes.filter((resume) => {
    //   return resume.resumeID === this.routeID
    // });
    // this.$store.commit('setResumeSate', currentResume);
    // this.loading = false;
    this.getAndSetCurrentResume();

  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    async getAndSetCurrentResume() {
      this.loading = true;
      await this.$store.dispatch('getResumes', this.$store.state.profileId);
      this.routeID = this.$route.params.resumeid;

      const currentResume =  await this.$store.state.resumes.filter((resume) => {
        return resume.resumeID === this.routeID
      });
      this.$store.commit('setResumeSate', currentResume);
      this.loading = false;
    },
    async updateResume() {
      // buralari hell et
      /*
      - state-de boiler resume yaradib ona currentResumenu elave etmek lazimdir
        setBlogState kimi
      - sonra bu boilterResumeni editResume icinde watch etmek lazimdir

      - sonra editResume icinde update() edende
        firebasedeki filan resumenin firstName: this.firstName

      indi biz nie bu currentResumeni niye aparib vuexa yaziriq ki ?
      zaten biz burada onu firebase gondereceyik!!!

       */
      this.loading = true;
      const resumeDB = await db.collection('resumes').doc(this.routeID);

      await resumeDB.update(this.resume);
      await this.$store.dispatch('getResumes');

      this.loading = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 800){
        this.mobile = true;
        this.mobilePreview = false;
        // this.$store.commit('setScreenMobility', false);
        return;
      }
      this.mobile = false;
      this.mobilePreview = true;
      // this.$store.commit('setScreenMobility', true);

    },
    setAllData() {
      console.log('windows reloaded');
    }
  },
  computed: {
    // resumeGetterTest() {
    //   return this.$store.getters.resumeGetterTest(this.routeID);
    // },
    ...mapFields([
      'resume',
      'resume.personalDetailsSec',
      'resume.employmentHistorySec',
    ]),
    // resume() {
    //   return this.$store.getters.resume;
    // }

  },

};
</script>
<style lang="scss">
.prev-and-down-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 103;
  background-color: rgb(33, 150, 243);
  color: #fff;
  padding: 10px 15px;
  border-radius: 30px;

  .icon {
    width: 40px;
  }

}

.create-cv {
  width: 50%;
  padding: 50px;
  height: 100vh;
  overflow: scroll;
  //height: 100%;



  @media (max-width: 800px) {
    width: 100%;
  }
  // margin: 0 auto;

  .save-btn {
    text-align: center;

    button {
      font-size: 2rem;
      padding: 20px 50px;
      border-radius: 40px;
      text-align: center;
      //background-color: #2196f3;
    }

  }

  .page-title {
    text-align: center;
    margin-bottom: 60px;
  }
  .create-cv-header {
    line-height: 26px;
    font-size: 16px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    color: rgb(152, 161, 179);

    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &::after {
      content: '';
      display: block;
      height: 3px;
      border-radius: 3px;
      width: 70%;
      background-color: brown;
      margin-top: 10px;
    }

    .complete-percent {
      span {
        color: red;
        font-weight: bold;
      }
    }
    .percent {
      display: flex;
      align-items: center;
      span {
        color: green;
        font-weight: bold;
        margin-right: 10px;
      }
      .info-icon {
        margin-left: 20px;
      }
    }
  }

  .cv-info-fill {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .section {
      margin-top: 50px;
      .section-header {
        .title {
          line-height: 50px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          cursor: pointer;

          .icon {
            display: flex;
            align-items: center;
            visibility: hidden;
            margin-right: 3px;
            margin-left: 3px;
          }
          .move-icon {
            margin-left: -24px;
          }
          &:hover .icon {
            visibility: initial !important;
          }
        }

        .subtitle {
          color: rgb(152, 161, 179);
          font-weight: initial;
          font-size: 14px;
          margin-bottom: 8px;
        }
      }

      .section-inner {
        .item-wrapper {
          position: relative;
          border: 1px solid rgb(226, 224, 224);
          margin: 10px 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          .item {
            .header-wrapper {
              //   line-height: 70px;
              position: relative;

              .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 20px;
                cursor: pointer;

                .title {
                  position: relative;

                  .icon {
                    transform: translateX(0px) rotate(90deg);
                    position: absolute;
                    right: 0;
                  }
                }
              }
              .move-icon {
                position: absolute;
                top: 50%;
                // right: calc(100% + 8px);
                right: 100%;
                transform: translateY(-50%);
                visibility: hidden;
              }
              .delete-icon {
                position: absolute;
                top: 50%;
                // left: calc(100% + 8px);
                left: 100%;
                transform: translateY(-50%);
                visibility: hidden;
              }
              .icon {
                width: 30px;
              }
            }
            .header-wrapper:hover {
              .header {
                color: #2196f3;
              }
              .move-icon,
              .delete-icon {
                visibility: initial;
              }
            }

            .info {
              padding: 20px;
            }
          }
        }
        .inputs {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          // margin: 20px;
          @media (min-width: 700px) {
            flex-direction: row;
          }

          .input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin-bottom: 15px;

            label {
              display: flex;
              align-items: center;
              color: #98a1b3;
              line-height: 20px;
              margin-bottom: 5px;
            }
            input {
              border: none;
              background-color: rgb(242, 245, 250);
              // background-color: #e8f0fe;
              line-height: 24px;
              padding: 11px 16px;
              border-radius: 3px;
              font-size: 19px;
              margin-top: 5px;

              &:focus {
                outline: none;
                border-bottom: 2px solid black;
                margin-bottom: -2px;
              }
            }
          }
          .input:nth-child(1) {
            margin-right: 0 !important;
            @media (min-width: 700px) {
              margin-right: 20px;
            }
          }
          .input:nth-child(2) {
            margin-left: 0px;
            @media (min-width: 700px) {
              margin-left: 20px;
            }
          }
          form {
            display: flex;

            .date-input:nth-child(1) {
              margin-right: 10px;
              width: 100%;
            }
            .date-input:nth-child(2) {
              margin-left: 10px;
              width: 100%;
            }
          }
        }
        #upload-photo {
          visibility: hidden;
          width: 0;
          height: 0;
          padding: 0;
        }
        .upload-photo {
          cursor: pointer;
          margin-top: 25px;
        }
      }

      .more-section {
        display: flex;
        flex-direction: column;
        @media (min-width: 700px) {
          flex-direction: row;
        }

        div {
          margin-right: 50px;
          p {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 20px;
          }
        }
      }

      .btn {
        background-color: initial !important;
        color: rgb(33, 150, 243);
        text-transform: initial;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        padding: 0px 15px;
        margin-top: 10px;

        .icon {
          transform: translateX(0px) rotate(90deg);
          width: 30px;
        }
      }

      .editor {
        // height: 60vh;
        display: flex;
        flex-direction: column;

        .quilWrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          //   height: 100%;
        }

        .ql-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: scroll;
        }

        .ql-editor {
          padding: 20px 16px 30px;
        }
      }
    }
  }
}
.additional-details-enter-active,
.additional-details-leave-active {
  transition: all 0.4s ease;
}

// transition burda sehifeden kenar baslayir
.additional-details-enter {
  transform: translateY(0%);
  opacity: 0;
}
// transition burda sehife icinde bitir
.additional-details-enter-to {
  transform: translateY(0%);
  opacity: 1;
}
// transition burda sehifeden geri cekilir yani menu geri qayidir
.additional-details-leave-to {
  transform: translateY(0%);
  opacity: 0;
}

.create-cv-wrapper {
   //display: flex;
  position: relative;
  overflow: scroll;


}
.cv-info-fill .section .editor .quillWrapper .ql-snow.ql-toolbar button {
  width: auto;
  height: auto;
}


.resume-preview {
  @media (max-width: 800px) {
    width: 100% !important;
    position: fixed;
    z-index: 103;
    top: 0;
    left: 0;
  }
}

.exit {
  text-decoration: none;
  color: #fff;
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 103;
  background-color: rgba(34, 34, 34, 0.4);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  .icon {
    width: 30px;
    height: 30px;
  }
  &:hover {
    background-color: rgba(34, 34, 34, 0.58);
  }

}

</style>

