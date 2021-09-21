<template>
  <div class="create-cv-wrapper">
    <div class="create-cv">
      <div class="container">
        <h2 class="page-title">Create CV</h2>
        <div class="create-cv-header">
          <div class="top">
            <p class="complete-percent">
              <span>25%</span> Profile completeness
            </p>
            <p class="section-percent">
              <span>+10%</span>Add profile summary<QuestionIcon
                class="info-icon"
              />
            </p>
          </div>
        </div>

        <div class="cv-info-fill">
          <!-- section start -->
          <div class="section">
            <h2 class="section-title">
              Personal Details<EditIcon class="icon" />
            </h2>

            <div class="inputs">
              <div class="input">
                <label for="job-title">Wanted Job Title</label>
                <input type="text" id="job-title" />
              </div>
              <div class="input">
                <input type="file" id="upload-photo" />
                <label for="upload-photo" class="upload-photo"
                  ><UserIcon />Upload photo</label
                >
              </div>
            </div>
            <div class="inputs">
              <div class="input">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" />
              </div>
              <div class="input">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" />
              </div>
            </div>
            <div class="inputs">
              <div class="input">
                <label for="email">Email</label>
                <input type="text" id="email" />
              </div>
              <div class="input">
                <label for="phone">Phone</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <transition name="additional-details">
              <div v-show="showAdditionalDetails" class="additional-details">
                <div class="inputs">
                  <div class="input">
                    <label for="country">Country</label>
                    <input type="text" id="country" />
                  </div>
                  <div class="input">
                    <label for="city">City</label>
                    <input type="text" id="city" />
                  </div>
                </div>
                <div class="inputs">
                  <div class="input">
                    <label for="address">Address</label>
                    <input type="text" id="address" />
                  </div>
                  <div class="input">
                    <label for="postal-code">Postal Code</label>
                    <input type="text" id="postal-code" />
                  </div>
                </div>
                <div class="inputs">
                  <div class="input">
                    <label for="driving-license">Drivin Lisense</label>
                    <input type="text" id="driving-license" />
                  </div>
                  <div class="input">
                    <label for="nationality">Nationality</label>
                    <input type="text" id="nationality" />
                  </div>
                </div>
                <div class="inputs">
                  <div class="input">
                    <label for="place-of-birth">Place Of Birth</label>
                    <input type="text" id="place-of-birth" />
                  </div>
                  <div class="input">
                    <label for="date-of-birth">Date Of Birth</label>
                    <input type="text" id="date-of-birth" />
                  </div>
                </div>
              </div>
            </transition>
            <button
              class="section-btn"
              @click="showAdditionalDetails = !showAdditionalDetails"
            >
              Edit Additional Details<ArrowIcon class="icon" />
            </button>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">
              Professional Summary<EditIcon class="icon" />
            </h2>
            <h4 class="section-subtitle">
              Include 2-3 clear sentences about your overall experience
            </h4>
            <div class="editor">
              <vue-editor
                :editorOptions="editorSettings"
                v-model="blogHTML"
                useCustomImageHandler
                @image-added="imageHandler"
                :editorToolbar="customToolbar"
              />
            </div>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">
              <MoveIcon class="icon move-icon" />Employment History<EditIcon
                class="icon"
              />
            </h2>
            <h4 class="section-subtitle">
              Include your last 10 years of relevant experience and dates in
              this section. List your most recent position first.
            </h4>
            <button class="section-btn">
              <PlusIcon class="icon" /> Add employment
            </button>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">
              <MoveIcon class="icon move-icon" />Education<EditIcon
                class="icon"
              />
            </h2>
            <h4 class="section-subtitle">
              If relevant, include your most recent educational achievments and
              the dates here.
            </h4>
            <button class="section-btn">
              <PlusIcon class="icon" /> Add education
            </button>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">
              <MoveIcon class="icon move-icon" />Websites & Social
              Links<EditIcon class="icon" />
            </h2>
            <h4 class="section-subtitle">
              You can add links to websites you want hiring managers to see!
              Perhaps it will be a link to you portfolio. LinkedIn profile.
            </h4>
            <button class="section-btn">
              <PlusIcon class="icon" /> Add link
            </button>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">
              <MoveIcon class="icon move-icon" />Skills<EditIcon class="icon" />
            </h2>
            <h4 class="section-subtitle">
              You can add links to websites you want hiring managers to see!
              Perhaps it will be a link to you portfolio. LinkedIn profile.
            </h4>
            <button class="section-btn">
              <PlusIcon class="icon" /> Add skill
            </button>
          </div>
          <!-- section end -->
          <!-- section start  -->
          <div class="section">
            <h2 class="section-title">Add Section</h2>
            <div class="more-section">
              <div>
                <p><CustomSecIcon />Custom Section</p>
                <p><ActivitiesSecIcon />Extra-curricular Activities</p>
                <p><HobbiesSecIcon />Hobbies</p>
                <p><ReferencesSecIcon />References</p>
              </div>
              <div>
                <p><CoursesSecIcon />Courses</p>
                <p><InternSecIcon />Internships</p>
                <p><LangsSecIcon />Languages</p>
              </div>
            </div>
          </div>
          <!-- section end -->
        </div>
      </div>
    </div>
    <div class="preview-cv"></div>
  </div>
</template>
<script>
import QuestionIcon from '../assets/Icons/create-cv/question.svg';
import EditIcon from '../assets/Icons/create-cv/editicon.svg';
import UserIcon from '../assets/Icons/create-cv/upload-user.svg';
import MoveIcon from '../assets/Icons/create-cv/movement.svg';
import CustomSecIcon from '../assets/Icons/create-cv/custom-section.svg';
import ActivitiesSecIcon from '../assets/Icons/create-cv/activities-section.svg';
import HobbiesSecIcon from '../assets/Icons/create-cv/hobbies.svg';
import ReferencesSecIcon from '../assets/Icons/create-cv/speaker.svg';
import CoursesSecIcon from '../assets/Icons/create-cv/courses-section.svg';
import InternSecIcon from '../assets/Icons/create-cv/internships.svg';
import LangsSecIcon from '../assets/Icons/create-cv/langs.svg';
import ArrowIcon from '../assets/Icons/create-cv/arrow-right.svg';
import PlusIcon from '../assets/Icons/create-cv/plus-blue.svg';

import Quill from 'quill';
window.Quill = Quill;
const ImageResize = require('quill-image-resize-module').default;
Quill.register('modules/imageResize', ImageResize);

export default {
  name: 'CreateCv',
  components: {
    QuestionIcon,
    EditIcon,
    UserIcon,
    MoveIcon,
    CustomSecIcon,
    ActivitiesSecIcon,
    HobbiesSecIcon,
    ReferencesSecIcon,
    CoursesSecIcon,
    InternSecIcon,
    LangsSecIcon,
    ArrowIcon,
    PlusIcon,
  },
  data() {
    return {
      blogHTML: '',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
      showAdditionalDetails: false,
    };
  },
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.create-cv {
  width: 100%;
  padding: 50px;

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
    .section-percent {
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

      .section-title {
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

      .section-subtitle {
        color: rgb(152, 161, 179);
        font-weight: initial;
        font-size: 14px;
        margin-bottom: 8px;
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

      .section-btn {
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

        .ql-snow .ql-toolbar button svg,
        .quillWrapper .ql-snow.ql-toolbar button {
          width: 7px !important;
          height: 3px !important;
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

.preview-cv {
  //   width: 50%;
  //   height: auto;
  //   background-color: #98a1b3;
}
.create-cv-wrapper {
  //   display: flex;
}

.editor {
  //   height: 100vh;
  display: flex;
  flex-direction: column;

  &:hover::after {
    // border-bottom: 2px solid blue !important;
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: cornflowerblue;
    margin-bottom: -3px;
  }

  .quilWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    .ql-container .ql-snow {
      border-color: brown !important;
    }
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
.quilWrapper {
  .ql-toolbar.ql-snow {
    border-width: 4px;
  }
}
</style>