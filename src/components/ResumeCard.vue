<template>
<div class="resume-card">
  <div @click="editResume(resume.resumeID)">
    <component :is="resume.templateName" :resume="resume"></component>
  </div>
    <div class="content">
<!--      editing false ise goster-->
      <div v-if="!editing">
        <h2>{{ resume.resumeDocName }} <EditIcon @click="enableEditing" class="edit-icon"/></h2>
      </div>
      <div >
        <label for="inputIsActive"  @click="enableEditing">hhhh</label>
        <input v-if="editing" v-model="inputValue"
               @blur="disableEditing(); $emit('update')"
               @keyup.enter="disableEditing(); $emit('update')"
               autofocus
               id="inputIsActive"
        >

      </div>
<!--      :class="{ 'activated-input': editing }"-->
<!--      @blur="disableEditing(); $emit('update')"-->
      <p>Updated 27 October, 14:08</p>

      <button @click="editResume(resume.resumeID)">
       Edit
      </button>
      <button @click="deleteResume(resume.resumeID)">
        delete
      </button>

    </div>
</div>
</template>
<script>
import BasicTheme from "../components/templates/BasicTheme";
import Sherlock from "./templates/Sherlock";
import BasicThemeFuji from "../components/templates/BasicThemeFuji";

import EditIcon from "../assets/Icons/edit-regular.svg"
// import vClickOutside from 'v-click-outside';

import 'firebase/storage';
import db from '../firebase/firebaseInit';

export default {
  name: "ResumeCard",
  components: {
    BasicTheme,
    Sherlock,
    BasicThemeFuji,
    EditIcon
  },
  props: ['resume'],
  data() {
    return {
      editing: false,
      inputValue: null
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

        // this.$refs.inputIsActive.click();
      window._document.querySelectorAll('#inputIsActive').click();

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
  }

}
</script>
<style lang="scss" scoped>
.edit-icon {
  color: #1eb8b8;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.resume-card {
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
  }
}


</style>
