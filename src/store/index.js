import Vue from 'vue'
import Vuex from 'vuex'

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        blogPosts: [],
        postLoaded: null,
        blogHTML: "Write your blog title here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        blogPhotoPreview: null,
        editPost: null,
        user: null,
        admin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUserName: null,
        profileId: null,
        profileInitials: null,
        // create cv page
        resumes: []

        // create cv page end


    },
    getters: {
        blogPostFeed(state) {
            return state.blogPosts.slice(0, 2);
        },
        blogPostCards(state) {
            return state.blogPosts.slice(2, 6);
        }
    },
    mutations: {
        //cv create start
        addEmptySkillComp(state, payload) {
            state.skillsSec.skills.push(payload);
            console.log(state.skillsSec.skills);
        },
        //cv create end
        newBlogPost(state, payload) {
            state.blogHTML = payload;
        },
        updateBlogTitle(state, payload) {
            state.blogTitle = payload;
        },
        fileNameChange(state, payload) {
            state.blogPhotoName = payload;
        },
        createFileURL(state, payload) {
            state.blogPhotoFileURL = payload;
        },
        openPhotoPreview(state) {
            state.blogPhotoPreview = !state.blogPhotoPreview;
        },
        toggleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost);
        },
        setBlogState(state, payload) {
            state.blogTitle = payload.blogTitle;
            state.blogHTML = payload.blogHTML;
            state.blogPhotoFileURL = payload.blogCoverPhoto;
            state.blogPhotoName = payload.blogCoverPhotoName;
        },
        filterBlogPost(state, payload) {
            state.blogPosts = state.blogPosts.filter((post) => {
                return post.blogID !== payload;
            });
        },
        updateUser(state, payload) {
            state.user = payload;
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileFirstName = doc.data().firstName;
            state.profileLastName = doc.data().lastName;
            state.profileUserName = doc.data().userName;
            state.admin = doc.data().admin;
        },
        setProfileInitials(state) {
            state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");

        },
        changeFirstName(state, payload) {
            this.state.profileFirstName = payload;
        },
        changelastName(state, payload) {
            this.state.profileLastName = payload;
        },
        changeUsername(state, payload) {
            this.state.profileUserName = payload;
        }
    },
    actions: {
        async getCurrentUser({ commit }) {
            const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
            const dbResult = await dataBase.get();
            commit("setProfileInfo", dbResult);
            commit("setProfileInitials");
            console.log(dbResult);
        },
        async getPost({ state }) {
            const dataBase = await db.collection('blogPosts').orderBy('date', 'desc');
            const dbResults = await dataBase.get();
            dbResults.forEach((doc) => {
                if (!state.blogPosts.some(post => post.blogID === doc.id)) {
                    const data = {
                        blogID: doc.data().blogID,
                        blogHTML: doc.data().blogHTML,
                        blogCoverPhoto: doc.data().blogCoverPhoto,
                        blogTitle: doc.data().blogTitle,
                        blogDate: doc.data().date,
                        blogCoverPhotoName: doc.data().blogCoverPhotoName,
                    };
                    state.blogPosts.push(data);
                }
            });
            state.postLoaded = true;
            // console.log(state.blogPosts);
        },

        async updatePost({ commit, dispatch }, payload) {
            commit('filterBlogPost', payload);
            await dispatch("getPost");
        },
        async deletePost({ commit }, payload) {
            const getPost = await db.collection("blogPosts").doc(payload);
            await getPost.delete();
            commit('filterBlogPost', payload);
        },
        async updateUserSettings({ commit, state }) {
            const dataBase = await db.collection("users").doc(state.profileId);
            await dataBase.update({
                firstName: state.profileFirstName,
                lastName: state.profileLastName,
                username: state.profileUserName,
            });
            commit("setProfileInitials");
        },
        // 
        // Resume Actions Start
        // 
        async createResume() {
            const timestamp = await Date.now();
            const resumesCollection = await db.collection('resumes').doc();
            await resumesCollection.set({
                profileId: this.state.profileId,
                date: timestamp,
                personalDetailsSec: {
                    sectionTitle: "Personal Details",
                    jobTitle: "frontend dev",
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
            });
        },
        async getResumes() {
            const resumesCollection = await db.collection('resumes');
            const allResumes = resumesCollection.get();

            allResumes.forEach(() => {

            })
        },
        async updateResume() {
            // update resume here
        },
        async deleteResume() {
            // delete resume here
        }
        // 
        // Resume Actions End
        // 

    },
    modules: {}
})

// database

// service cloud.firestore {
// 	match /databases/{database}/documents {
//   	match /users/{userID} {
//     	allow read;
//       allow write: if request.auth.uid != null;
//     }
//     match /blogPosts/{postID} {
//     allow read;
//     allow write: if request.auth.token.admin == true;
//     }
//   }
// }

// storage
//   await dataBase.set({
// {
//             personalDetailsSec: {
//                 sectionTitle: "Personal Details",
//                 jobTitle: "frontend dev",
//                 cvPhotoName: "",
//                 cvPhotoFileURL: null,
//                 cvPhotoPreview: null,
//                 cvFirstName: null,
//                 cvLastName: null,
//                 cvEmail: null,
//                 cvPhone: null,
//                 cvCountry: null,
//                 cvCity: null,
//                 cvAddress: null,
//                 cvPostalCode: null,
//                 cvDrivingLicense: null,
//                 cvNationality: null,
//                 cvPlaceOfBirth: null,
//                 cvDateOfBirth: null,
//             },
//             professionalSummarySec: {
//                 sectionTitle: "Professional Summary",
//                 summaryHTML: null,
//             },
//             skillsSec: {
//                 sectionTitle: "Skills",
//                 skills: []
//             },
//             educationSec: {
//                 sectionTitle: "Education",
//                 educations: [{
//                     school: null,
//                     degree: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                     description: null,
//                 }]
//             },
//             socialLinksSec: {
//                 sectionTitle: "Websites & Social Links",
//                 socialLinks: [{
//                     label: null,
//                     link: null,
//                 }]
//             },
//             employmentHistorySec: {
//                 sectionTitle: "Employment History",
//                 employmentHistories: [{
//                     jobTitle: null,
//                     employer: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                     city: null,
//                     jobDescHTML: null,
//                 }]
//             },
//             hobbiesSec: {
//                 sectionTitle: "Hobbies",
//                 hobbiesText: null,
//             },
//             coursesSec: {
//                 sectionTitle: "Courses",
//                 courses: [{
//                     courseName: null,
//                     institution: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                 }]
//             },
//             internshipsSec: {
//                 sectionTitle: "Internships",
//                 internships: [{
//                     jobTitle: null,
//                     employer: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                     city: null,
//                     jobDescHTML: null,
//                 }]
//             },
//             languagesSec: {
//                 sectionTitle: "Languages",
//                 languagesSec: [{
//                     language: null,
//                     level: null,
//                 }]
//             },
//             referencesSec: {
//                 sectionTitle: "References",
//                 references: [{
//                     referentsFullName: null,
//                     company: null,
//                     phone: null,
//                     email: null,
//                 }]
//             },
//             extraActivitiesSec: {
//                 sectionTitle: "Extra-curricular Activities",
//                 extraActivities: [{
//                     functionTitle: null,
//                     employer: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                     city: null,
//                     jobDescHTML: null,
//                 }]
//             },
//             customSectionSec: {
//                 sectionTitle: "Untitled Edit Me!",
//                 customSectionSec: [{
//                     itemName: null,
//                     city: null,
//                     startDate: null,
//                     endDate: null,
//                     startAndEndDate: null,
//                 }]
//             },
//         }
//         });