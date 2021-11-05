<template>
  <div>
    <Loading v-show="loading"/>

<!--    <EditPage />-->

    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>
      <div class="cvbuilder-nav">
        <button>Resumes</button>
        <button @click="createResume">+ Create New</button>
      </div>


      <div class="row resume-cards">
          <ResumeCard class="col-md-6" v-for="(resume, index) in resumes" :key="index" :resume="resume" />
      </div>

<!--      <TestParentComponent></TestParentComponent>-->

        <button @click="createResume">+ Create New</button>

    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
import 'firebase/storage';
import db from '../firebase/firebaseInit';
import Loading from "../components/common/Loading";
import { mapFields } from 'vuex-map-fields';
import ResumeCard from "../components/ResumeCard";

export default {
  name: 'Resumes',
  components: {Loading,  ResumeCard, },
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
        templateName: "BasicThemeFuji",
        resumeDocName: "CV document Name 222222",
        personalDetailsSec: {
          sectionTitle: 'Personal Details',
          jobTitle: '',
          photoName: '',
          photoFileURL: null,
          photoPreview: null,
          firstName: null,
          lastName: null,
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

      await this.$store.dispatch('getResumes');

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


</style>
