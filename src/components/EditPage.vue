<template>
  <div class="create-cv-wrapper">
    <Loading v-show="loading" />

    <div class="create-cv">
      <div class="container">
        <h2 class="page-title">Create CV</h2>

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
          <PersonalDetailsSec :personalDetailsSec="this.resume.personalDetailsSec"/>
          <!-- section end -->
          <!-- section start  -->
          <SummarySec />
          <!-- section end -->
          <!-- section start  -->
          <EmploymentSec />
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
          <button class="save-btn">SAVE!</button>
        </div>
      </div>
    </div>
    <!--    <div class="preview-resume">-->
    <!--      <div class="doc">-->
    <!--        <component :is="this.resume.templateName" :resume="this.resume"></component>-->
    <!--      </div>-->
    <!--    </div>-->
    <ResumePreview :resume="this.resume"/>
  </div>
</template>
<script>
import QuestionIcon from '../assets/Icons/create-cv/question.svg';
import PersonalDetailsSec from '../components/cv-sections/PersonalDetailsSec.vue';
import SummarySec from '../components/cv-sections/SummarySec.vue';
import EmploymentSec from '../components/cv-sections/EmploymentSec.vue';
import EducationSec from '../components/cv-sections/EducationSec.vue';
import SocialLinksSec from '../components/cv-sections/SocialLinksSec.vue';
import SkillsSec from '../components/cv-sections/SkillsSec.vue';
import CustomSec from '../components/cv-sections/CustomSec.vue';
// import BasicTheme from '../components/templates/BasicTheme.vue';
// import BasicThemeFuji from "../components/templates/BasicThemeFuji";

import ResumePreview from "../components/ResumePreview";
import Loading from "../components/common/Loading";
import {mapFields} from "vuex-map-fields";

export default {
  name: 'EditResume',
  components: {
    QuestionIcon,
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
  },
  data() {
    return {
      routeID: null,
      currentResume: null,
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      loading: null,
    };
  },
  //sjhss
  mounted() {
    // this.loading = true;
    // this.routeID = this.$route.params.resumeid;
    // setTimeout(() =>{
    //   const currentResume =   this.$store.state.resumes.filter((resume) => {
    //     return resume.resumeID === this.routeID
    //   });
    //   this.$store.commit('setResumeSate', currentResume);
    //   this.loading = false;
    // }, 2000)

  },

  methods: {
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
    }
  },
  computed: {
    // resumeGetterTest() {
    //   return this.$store.getters.resumeGetterTest(this.routeID);
    // },
    ...mapFields([
      'resume',
      'resume.personalDetailsSec'
    ]),
    // resume() {
    //   return this.$store.getters.resume;
    // }

  },
  created() {
    this.loading = true;
    this.routeID = this.$route.params.resumeid;

    setTimeout(() =>{
      const currentResume =  this.$store.state.resumes.filter((resume) => {
        return resume.resumeID === this.routeID
      });

      this.$store.commit('setResumeSate', currentResume);
      this.loading = false;

    }, 2000)
  }
};
</script>
<style lang="scss">

.create-cv {
  width: 50%;
  padding: 50px;
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
  display: flex;
}
.cv-info-fill .section .editor .quillWrapper .ql-snow.ql-toolbar button {
  width: auto;
  height: auto;
}





</style>
