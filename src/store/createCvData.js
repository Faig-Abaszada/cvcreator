import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        personalDetailsSec: {
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
        professionalSummarySec: {
            sectionTitle: "Professional Summary",
            summaryHTML: null,
        },
        skillsSec: {
            sectionTitle: "Skills",
            skills: [{
                    skill: "HTML5",
                    skillLevel: null,
                },
                {
                    skill: "CSS3",
                    skillLevel: null,
                },
                {
                    skill: "JavaScript",
                    skillLevel: null,
                }
            ]
        },
        educationSec: {
            sectionTitle: "Education",
            educations: [{
                school: null,
                degree: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
                description: null,
            }]
        },
        socialLinksSec: {
            sectionTitle: "Websites & Social Links",
            socialLinks: [{
                label: null,
                link: null,
            }]
        },
        employmentHistorySec: {
            sectionTitle: "Employment History",
            employmentHistories: [{
                jobTitle: null,
                employer: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
                city: null,
                jobDescHTML: null,
            }]
        },
        hobbiesSec: {
            sectionTitle: "Hobbies",
            hobbiesText: null,
        },
        coursesSec: {
            sectionTitle: "Courses",
            courses: [{
                courseName: null,
                institution: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
            }]
        },
        internshipsSec: {
            sectionTitle: "Internships",
            internships: [{
                jobTitle: null,
                employer: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
                city: null,
                jobDescHTML: null,
            }]
        },
        languagesSec: {
            sectionTitle: "Languages",
            languagesSec: [{
                language: null,
                level: null,
            }]
        },
        referencesSec: {
            sectionTitle: "References",
            references: [{
                referentsFullName: null,
                company: null,
                phone: null,
                email: null,
            }]
        },
        extraActivitiesSec: {
            sectionTitle: "Extra-curricular Activities",
            extraActivities: [{
                functionTitle: null,
                employer: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
                city: null,
                jobDescHTML: null,
            }]
        },
        customSectionSec: {
            sectionTitle: "Untitled Edit Me!",
            customSectionSec: [{
                itemName: null,
                city: null,
                startDate: null,
                endDate: null,
                startAndEndDate: null,
            }]
        }




    }
})