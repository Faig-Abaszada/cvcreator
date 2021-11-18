<template>
<div class="resume-card">
  <div @click="editResume(resume.resumeID)">
    <component :is="resume.templateName" :resume="resume"></component>
  </div>
    <div class="content">
      <div class="header">
        <h2 v-if="!editing">{{ resume.resumeDocName }} </h2>
        <label v-show="!editing" for="inputIsActive" @click="enableEditing"><EditIcon @click="enableEditing" class="edit-icon"/></label>
        <input v-if="editing" v-model="inputValue"
               @blur="disableEditing(); $emit('update')"
               @keyup.enter="disableEditing(); $emit('update')"
               autofocus
               id="inputIsActive"
        >
      </div>
      <p>Created:  {{ new Date(resume.date).toLocaleString('en-us', {dateStyle: "long"}) }}</p>

      <div class="card-buttons">
        <button  @click="editResume(resume.resumeID)">
          <EditIcon @click="enableEditing" class="icon"/>Edit
        </button>
        <button>
          <ShareIcon class="icon" />Share a link
        </button>
        <button>
          <DownloadIcon class="icon"/>Download PDF
        </button>

        <button
            @click="showMoreBtns = !showMoreBtns"
            @blur="closeMoreButtons(); $emit('update')"
        >
          <DotsIcon class="icon pt-1"/> More
        </button>

        <div v-show="showMoreBtns" class="sub-buttons">
          <button @click="deleteResume(resume.resumeID)">
            <CopyIcon class="icon" />Make a copy
          </button>
          <button @click="deleteResume(resume.resumeID)">
            <DeleteIcon class="icon" />delete
          </button>

          <CompressIcon class="compress-button"/>
        </div>
      </div>

    </div>
</div>
</template>
<script>
import BasicTheme from "../components/templates/BasicTheme";
import Sherlock from "./templates/Sherlock";
import BasicThemeFuji from "../components/templates/BasicThemeFuji";

import EditIcon from "../assets/Icons/create-cv/edit-light.svg"
import DeleteIcon from "../assets/Icons/create-cv/delete.svg"
import ShareIcon from "../assets/Icons/create-cv/shareicon.svg"
import CopyIcon from "../assets/Icons/create-cv/duplicate.svg"
import DownloadIcon from "../assets/Icons/create-cv/download.svg"
import DotsIcon from "../assets/Icons/create-cv/dots.svg"
import CompressIcon from "../assets/Icons/create-cv/compress-icon.svg"
// import vClickOutside from 'v-click-outside';

import 'firebase/storage';
import db from '../firebase/firebaseInit';

export default {
  name: "ResumeCard",
  components: {
    BasicTheme,
    Sherlock,
    BasicThemeFuji,
    EditIcon,
    DeleteIcon,
    ShareIcon,
    CopyIcon,
    DownloadIcon,
    DotsIcon,
    CompressIcon
  },
  props: ['resume'],
  data() {
    return {
      editing: false,
      inputValue: null,
      showMoreBtns: true,
    }
  },
  methods: {
    async editResume(id) {
      this.loading = true;
      const currentResume = await this.$store.state.resumes.filter((resume) => {
        return resume.resumeID === id;
      });
      this.$store.commit('setResumeSate', currentResume);

      this.loading = false;
      this.$router.push({
        name: 'EditResume',
        params: { resumeid: id },
      });
    },
    deleteResume(resumeID) {
      this.$store.dispatch('deleteResume', resumeID)
    },
    enableEditing() {
        this.inputValue = this.resume.resumeDocName;
        this.editing = true;
    },
    async disableEditing() {
       this.editing = false;

      this.resume.resumeDocName = this.inputValue;
      const resumeDB = await db.collection('resumes').doc(this.resume.resumeID);

      await resumeDB.update({
        resumeDocName: this.inputValue
      });


      // this.inputValue = null;

    },
    closeMoreButtons() {
      // if (e.className !== 'sub-buttons'){
      //   this.showMoreBtns = !this.showMoreBtns
      // }
      setTimeout(() => {
        this.showMoreBtns = false
      }, 200);

      // console.log(event.target.classList.contains('add-employment'))

    }
  }

}
</script>
<style lang="scss" scoped>

.resume-card {
  @media (max-width: 800px ) {
    .resume-doc {
      transform: scale(0.1);
    }
  }

  width: 450px;
  height: 228px;
  position: relative;
  margin-bottom: 20px;
  margin-right: 40px;
  .resume-doc {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.2);
    transform-origin: 0 0;
    border: 2px solid #000;
    border-radius: 30px;
    cursor: pointer;
  }
  .content {
    position: absolute;
    right: 40px;

    h2 {
      margin-bottom: 0px;
    }

    .header {
      display: flex;
      //justify-content: center;
      align-items: center;
      //line-height: 60px;

      label {
        display: flex;
        align-items: center;
      }
      .edit-icon {
        color: #98a1b3;
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin-left: 5px;

        &:hover {
          color: rgb(33, 150, 243)
        }
      }
      input {
        width: 100% !important;
      }
    }


  }
  @media (max-width: 800px ) {
    .resume-doc {
      transform: scale(0.18);
    }
    .content {
      right: 0px;
      h2 {
        font-size: 18px;
        text-align: left;
      }
    }
    .content * {
      font-size: 0.9rem;
    }

  }

  .card-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    button {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding: 3px 0;


      .icon {
        width: 25px;
        height: 25px;
        color: rgb(33, 150, 243);
      }

      &:hover {
        color: rgb(33, 150, 243);
      }
    }

    .sub-buttons {
      //border: 2px solid #000;
      width: 80%;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1), 0px 2px 5px -1px rgba(0,0,0,0.3);
      //display: flex;
      padding: 20px 10px;
      background-color: #fff;

      .compress-button {
        display: none;
      }
    }
    @media (max-width: 800px) {
      .sub-buttons {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;

        .compress-button {
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          //left: 50%;
          //transform: translateX(-50%);
          padding: 15px;

          color: #838383;
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
@media (max-width: 800px ) {
  .resume-card {
    border-radius: 10px;
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.3);

  }

}

</style>
