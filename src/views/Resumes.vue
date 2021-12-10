<template>
  <div>
    <Loading v-show="loading"/>
    <ResumeLimitModal v-if="upgradeModal" @close-modal="closeUpgradeModal"/>

<!--    <EditPage />-->

    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>

      <div class="cvbuilder-nav">
<!--        <button>Resumes</button>-->
        <button class="primary-button desktop-new-resume" @click="createResume">+ Create New</button>
      </div>


      <div class="row g-0 resume-cards">

        <button v-show="resumes.length !== 0" class="primary-button mobile-new-resume" @click="createResume">+ Create New</button>

        <ResumeCard v-show="resumes.length !== 0" class="col-md-6" v-for="(resume, index) in resumes" :key="index" :resume="resume" />
<!--        <ResumeCard v-for="(resume, index) in resumes" :key="index" :resume="resume" />-->
          <div @click="createResume" class="static-resume-card">
              <div class="doc-shadow">
                  <PlusIcon v-show="resumes.length !== 0" class="icon" />
                  <NoResumeImg v-show="resumes.length === 0" />
<!--                  <NoResumeImg v-show="false" />-->
<!--                  <div v-show="cardLoadWait" class="card-waiting">-->
<!--                    <img :src='require("@/assets/loading-fast.gif")' alt="">-->
<!--                  </div>-->
              </div>
              <div class="doc-content">
                <h2>New Resume</h2>
                <p>Create a tailored resume for each job application. Double your chances of getting hired!</p>
                <button v-show="resumes.length === 0" class="primary-button mobile-new-resume">+ Create New</button>
              </div>
          </div>
      </div>

    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
import PlusIcon from "../assets/Icons/create-cv/plus-grey.svg"
import NoResumeImg from "../assets/Icons/create-cv/no-resumes.svg"

import 'firebase/storage';
import db from '../firebase/firebaseInit';
import Loading from "../components/common/Loading";
import { mapFields } from 'vuex-map-fields';
import ResumeCard from "../components/ResumeCard";
import ResumeLimitModal from "../components/common/ResumeLimitModal";

export default {
  name: 'Resumes',
  components: {
    Loading,
    ResumeCard,
    PlusIcon,
    NoResumeImg,
    ResumeLimitModal,
  },
  data() {
    return {
      loading: null,
      upgradeModal: null,
      cardLoadWait: null,
    };
  },
  methods: {
    // ...mapActions(['getResumes']),
    async createResume() {
      this.loading = true;
      const timestamp = await Date.now();
      const resumeDB = await db.collection('resumes').doc();

      if (this.resumes.length === 0) {
        await resumeDB.set({
          resumeID: resumeDB.id,
          profileId: this.profileId,
          date: timestamp,
          templateName: "Sherlock",
          resumeDocName: "cv-name",
          personalDetailsSec: {
            sectionTitle: 'Personal Details',
            jobTitle: '',
            photoName: '',
            photoFileURL: null,
            photoPreview: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
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
              // {
              //   position: 'frontend',
              //   company: null,
              //   startDate: '2015',
              //   endDate: null,
              //   startAndEndDate: null,
              //   city: 'baku',
              //   description: null,
              // },
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
      } else {
        this.loading = false;
        this.upgradeModal = true
      }


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
    },
    closeUpgradeModal() {
      this.upgradeModal = false;
    }
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    // resumes() {
    //   return this.$store.state.resumes;
    // },
    ...mapFields(['resumes']),
    resumesFromState() {
      return this.$store.state.resumes;
    }
  },
  created() {
    this.cardLoadWait = true;
    this.$store.dispatch('getResumes', this.profileId);
    this.cardLoadWait = false;
  },
  async mounted() {
    // await this.$store.dispatch('getResumes');
    await this.$store.dispatch('getCurrentUser');
    // await this.$store.dispatch('getResumes', this.profileId);
  },
};
</script>
<style lang="scss">
.card-waiting {

  img {
    width: 100px;
  }
}
.cvbuilder-wrapper {
  padding: 0 20px;
  margin: 20px auto;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0;
  }
}
@media (max-width: 800px) {
  .cvbuilder-wrapper {
    padding: 0 10px;

  }
}
.cvbuilder-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  //padding-bottom: 5px;
  margin-bottom: 20px;


  .desktop-new-resume {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    .desktop-new-resume {
      display: none;
    }
  }
}

.resume-cards {
  margin:  auto;

  .mobile-new-resume {
    display: none;
    margin-bottom: 25px;
    padding: 14px;
  }
  @media (max-width: 768px) {
    .mobile-new-resume {
      display: block;
    }
  }
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
    border: 1px solid #e5e5e5;

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
    padding-left: 15px;
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
@media (min-width: 1000px) {
  .static-resume-card {
    display: flex !important;
  }
}


</style>
