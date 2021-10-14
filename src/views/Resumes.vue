<template>
  <div>
    <div class="cvbuilder-wrapper">
      <h1>Documents</h1>
      <div class="cvbuilder-nav">
        <button>Resumes</button>
        <button>+ Create New</button>
      </div>
      <Template />
      <h2>
        <!-- <router-link class="link" :to="{ name: 'EditCv' }"
          >+ Create New</router-link
        > -->

        <button @click="createResume">+ Create New</button>
      </h2>
    </div>
  </div>
</template>
<script>
// import firebase from 'firebase/app';
import 'firebase/storage';
import db from '../firebase/firebaseInit';

import Template from '../components/templates/BasicTheme.vue';
// import { mapActions } from 'vuex';

export default {
  name: 'Resumes',
  components: { Template },
  data() {
    return {
      resumes: [],
    };
  },
  methods: {
    // ...mapActions(['getResumes']),
    async createResume() {
      const timestamp = await Date.now();
      const resumeDB = await db.collection('resumes').doc();
      await resumeDB.set({
        resumeID: resumeDB.id,
        profileId: this.profileId,
        date: timestamp,
        personalDetailsSec: {
          sectionTitle: 'Personal Details',
          jobTitle: '',
          PhotoName: '',
          PhotoFileURL: null,
          PhotoPreview: null,
          FirstName: null,
          LastName: null,
          Email: null,
          Phone: null,
          Country: null,
          City: null,
          Address: null,
          PostalCode: null,
          DrivingLicense: null,
          Nationality: null,
          PlaceOfBirth: null,
          DateOfBirth: null,
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
      this.$router.push({
        name: 'EditResume',
        params: { resumeid: resumeDB.id },
      });
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
  },
  created() {
    this.unwatch = this.$store.watch(
      (state) => state.resumeDocName,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
    );
  },
  async mounted() {
    await this.$store.dispatch('getResumes');
  },
};
</script>
<style lang="scss">
.cvbuilder-wrapper {
  padding: 100px;
  height: 100vh;
}
.cvbuilder-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  a {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>