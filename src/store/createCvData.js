import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        personalDetails: {
            sectionTitle: "Personal Details",
            jobTitle: "",
            cvPhotoName: "",
            cvPhotoFileURL: null,
            cvPhotoPreview: null,
            cvFirstName: null,
            cvLastName: null,
            cvEmail: null,
            cvPhone: null,
            cvCountry: null,
            cvCity: null,
            cvAddress: null,
            cvPostalCode: null,
            cvDrivingLicense: null,
            cvNationality: null,
            cvPlaceOfBirth: null,
            cvDateOfBirth: null,
        },
        professionalSummary: {
            sectionTitle: "Professional Summary",
            summaryHTML: null,
        },
        skills: {
            sectionTitle: "Skills",
            skill: null,
            skillLevel: null,
        },
        education: {
            sectionTitle: "Education",
            school: null,
            degree: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
            description: null,
        },
        socialLinks: {
            sectionTitle: "Websites & Social Links",
            label: null,
            link: null,
        },
        employmentHistory: {
            sectionTitle: "Employment History",
            jobTitle: null,
            employer: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
            city: null,
            jobDescHTML: null,
        },
        hobbies: {
            sectionTitle: "Hobbies",
            hobbiesText: null,
        },
        courses: {
            sectionTitle: "Courses",
            courseName: null,
            institution: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
        },
        internships: {
            sectionTitle: "Internships",
            jobTitle: null,
            employer: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
            city: null,
            jobDescHTML: null,
        },
        languages: {
            sectionTitle: "Languages",
            language: null,
            level: null,
        },
        references: {
            sectionTitle: "References",
            referentsFullName: null,
            company: null,
            phone: null,
            email: null,
        },
        extraActivities: {
            sectionTitle: "Extra-curricular Activities",
            functionTitle: null,
            employer: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
            city: null,
            jobDescHTML: null,
        },
        customSection: {
            sectionTitle: "Untitled Edit Me!",
            itemName: null,
            city: null,
            startDate: null,
            endDate: null,
            startAndEndDate: null,
        }




    }
})