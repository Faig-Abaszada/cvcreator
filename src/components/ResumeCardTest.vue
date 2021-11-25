<template>
<div>
 <div class="resume-card">
   <div class="resume-container">
     <component :is="resume.templateName" :resume="resume"></component>
   </div>
   <div class="content">
     <h3>Abaszada Faig</h3>
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
import VueHtml2pdf from 'vue-html2pdf'

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
    CompressIcon,
    VueHtml2pdf
  },
  props: ['resume'],
  data() {
    return {
      editing: false,
      inputValue: null,
      showMoreBtns: false,
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

    },
    downloadResume() {
      console.log('clikced');

      this.$refs.html2Pdf.generatePdf()
    },
  }

}
</script>
<style lang="scss" scoped>

.resume-card {
  display: flex;
  justify-content: start;
  position: relative;


  .content {

  }
  .resume-container {



    .resume-doc {
      transform: scale(0.4);
      transform-origin: 0 0;
      margin-right: calc(21cm * -0.6);
      margin-bottom: calc(29.7cm * -0.6);
    }



  }
}


</style>
