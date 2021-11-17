<template>
  <div>
    <Loading v-show="loading"/>

<!--    <EditPage />-->

    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>
      <div class="cvbuilder-nav">
        <button>Resumes</button>
        <button class="primary-button" @click="createResume">+ Create New</button>
      </div>


      <div class="row g-0 resume-cards">
          <ResumeCard class="col-md-6" v-for="(resume, index) in resumes" :key="index" :resume="resume" />
          <div @click="createResume" class="static-resume-card">
              <div class="doc-shadow">
                  <plusIcon class="icon" />
              </div>
              <div class="doc-content">
                <h2>New Resume</h2>
                <p>Create a tailored resume for each job application. Double your chances of getting hired!</p>
              </div>
          </div>
      </div>

<!--      <TestParentComponent></TestParentComponent>-->

        <button @click="createResume">+ Create New</button>

    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
import plusIcon from "../assets/Icons/create-cv/plus-grey.svg"

import 'firebase/storage';
import db from '../firebase/firebaseInit';
import Loading from "../components/common/Loading";
import { mapFields } from 'vuex-map-fields';
import ResumeCard from "../components/ResumeCard";

export default {
  name: 'Resumes',
  components: {Loading,  ResumeCard, plusIcon},
  data() {
    return {
      loading: null,
    };
  },
  methods: {
    // ...mapActions(['getResumes']),
    async createResume() {
      this.loading = true;
      const timestamp = await Date.now();
      const resumeDB = await db.collection('resumes').doc();

      await resumeDB.set({
        resumeID: resumeDB.id,
        profileId: this.profileId,
        date: timestamp,
        templateName: "Sherlock",
        resumeDocName: "cv doc name",
        personalDetailsSec: {
          sectionTitle: 'Personal Details',
          jobTitle: '',
          photoName: '',
          photoFileURL: null,
          photoPreview: null,
          firstName: 'Faig',
          lastName: 'Abaszada',
          email: null,
          phone: null,
          country: null,
          city: null,
          address: null,
          postalCode: null,
          drivingLicense: null,
          nationality: null,
          placeOfBirth: null,
          dateOfBirth: null,
        },
        professionalSummarySec: {
          sectionTitle: 'Professional Summary',
          summaryHTML: null,
        },
        skillsSec: {
          sectionTitle: 'Skills',
          skills: [],
        },
        educationSec: {
          sectionTitle: 'Education',
          educations: [
            {
              school: null,
              degree: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
              description: null,
            },
          ],
        },
        socialLinksSec: {
          sectionTitle: 'Websites & Social Links',
          socialLinks: [
            {
              label: null,
              link: null,
            },
          ],
        },
        employmentHistorySec: {
          sectionTitle: 'Employment History',
          employmentHistories: [
            {
              jobTitle: null,
              employer: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
              city: null,
              jobDescHTML: null,
            },
          ],
        },
        hobbiesSec: {
          sectionTitle: 'Hobbies',
          hobbiesText: null,
        },
        coursesSec: {
          sectionTitle: 'Courses',
          courses: [
            {
              courseName: null,
              institution: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
            },
          ],
        },
        internshipsSec: {
          sectionTitle: 'Internships',
          internships: [
            {
              jobTitle: null,
              employer: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
              city: null,
              jobDescHTML: null,
            },
          ],
        },
        languagesSec: {
          sectionTitle: 'Languages',
          languagesSec: [
            {
              language: null,
              level: null,
            },
          ],
        },
        referencesSec: {
          sectionTitle: 'References',
          references: [
            {
              referentsFullName: null,
              company: null,
              phone: null,
              email: null,
            },
          ],
        },
        extraActivitiesSec: {
          sectionTitle: 'Extra-curricular Activities',
          extraActivities: [
            {
              functionTitle: null,
              employer: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
              city: null,
              jobDescHTML: null,
            },
          ],
        },
        customSectionSec: {
          sectionTitle: 'Untitled Edit Me!',
          customSectionSec: [
            {
              itemName: null,
              city: null,
              startDate: null,
              endDate: null,
              startAndEndDate: null,
            },
          ],
        },
      });

      await this.$store.dispatch('getResumes', this.profileId);

      const currentResume = await this.$store.state.resumes.filter((resume) => {
        return resume.resumeID === resumeDB.id;
      });
      this.$store.commit('setResumeSate', currentResume);

      this.loading = false;

      this.$router.push({
        name: 'EditResume',
        params: { resumeid: resumeDB.id },
      });
    },
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
    }
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    // resumes() {
    //   return this.$store.state.resumes;
    // },
    ...mapFields(['resumes'])
  },
  created() {},
  async mounted() {
    // await this.$store.dispatch('getResumes');
    await this.$store.dispatch('getCurrentUser');
    await this.$store.dispatch('getResumes', this.profileId);
  },
};
</script>
<style lang="scss">
.cvbuilder-wrapper {
  padding: 0 20px;
  margin: 20px auto;
}
.cvbuilder-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.resume-cards {
  margin:  auto;
}

.static-resume-card {
  width: 450px;
  height: 228px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;



  .doc-shadow {
    height: 100%;
    width: 159px;
    border-radius: 10px;
    border: 1px solid #838383;

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      width: 50px;
      height: 50px;
      color: #98a1b3;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;
    }

  }
  .doc-content {
    width: 250px;
    color: #98a1b3;
    h2 {
      font-size: 18px;
      transition: all 0.5s;
    }

    p {
      font-size: 14px;
    }
  }

  &:hover {

    .icon {
      background-color: #2196f3;
      color: #fff;
    }
    .doc-content h2 {
      color: #2196f3;
    }

  }

}


</style>
