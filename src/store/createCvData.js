import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        resumes: [{
            personalDetailsSec: {
                id: "sectionTitle",
                fields: [{
                        id: "section_title",
                        sectionTitle: "Personal Details"
                    },
                    {
                        id: "job-title",
                        jobTitle: "frontend dev"
                    },
                    {
                        id: "PhotoName",
                        photoName: ""
                    },
                    {
                        id: "photo-fileURL",
                        photoFileURL: null
                    },
                    {
                        id: "",
                        photoPreview: null
                    },
                    {
                        id: "",
                        firstName: null
                    },
                    {
                        id: "",
                        lastName: null
                    },
                    {
                        id: "",
                        email: null
                    },
                    {
                        id: "",
                        phone: null
                    },
                    {
                        id: "",
                        country: null
                    },
                    {
                        id: "",
                        city: null
                    },
                    {
                        id: "",
                        address: null
                    },
                    {
                        id: "",
                        postalCode: null
                    },
                    {
                        id: "",
                        drivingLicense: null
                    },
                    {
                        id: "",
                        nationality: null
                    },
                    {
                        id: "",
                        placeOfBirth: null
                    },
                    {
                        id: "dateOfBirth",
                        dateOfBirth: null
                    }
                ]
            },
            professionalSummarySec: {
                sectionTitle: "Professional Summary",
                summaryHTML: null,
            },
            skillsSec: {
                sectionTitle: "Skills",
                skills: []
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
            },
        }]

    }
})