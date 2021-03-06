import Vue from 'vue'
import Vuex from 'vuex'

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit"

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        person: {
            name: 'Faig'
        },
        mobile: null,
        blogPosts: [],
        postLoaded: null,

        // Current Blog
        blogHTML: "Write your blog title here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        // Current Blog End

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
        resumes: [],
        templateName: "BasicTheme",
        resume: {
            resumeID: null,
            profileId: null,
            date: null,
            templateName: "Sherlock",
            resumeDocName: "cv-name",
            resumePhotoFile: null,
            resumePhotoName: null,
            resumePhotoFileURL: null,
            resumePhotoType: null,
            personalDetailsSec: {
                sectionId: 'personal',
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
                sectionId: 'summary',
                sectionTitle: 'Professional Summary',
                summaryHTML: '',
            },
            skillsSec: {
                sectionId: 'skills',
                sectionTitle: 'Skills',
                skills: [],
            },
            educationSec: {
                sectionId: 'educations',
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
                sectionId: 'links',
                sectionTitle: 'Websites & Social Links',
                socialLinks: [
                    {
                        label: null,
                        link: null,
                    },
                ],
            },
            employmentHistorySec: {
                sectionId: 'employments',
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
                sectionId: 'hobbies',
                sectionTitle: 'Hobbies',
                hobbiesText: null,
            },
            coursesSec: {
                sectionId: 'courses',
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
                sectionId: 'internships',
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
                sectionId: 'languages',
                sectionTitle: 'Languages',
                languagesSec: [
                    {
                        language: null,
                        level: null,
                    },
                ],
            },
            referencesSec: {
                sectionId: 'references',
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
                sectionId: 'activities',
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
                sectionId: 'customs',
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
        },
        resumePhotoFile: null,


        // create cv page end
        // resume: null,
        resumeLoaded: null,

    },
    getters: {
        getField,
        blogPostFeed(state) {
            return state.blogPosts.slice(0, 2);
        },
        blogPostCards(state) {
            return state.blogPosts.slice(2, 6);
        },
        person(state) {
            return state.person;
        },
        resume(state) {
            return state.resume;
        }

        //
        // resumeGetterTest: (state) => (id) => {
        //     // state.resumes.forEach((resume) => {
        //     //     return resume;
        //     // })
        //     return state.resumes.find(resume => resume.resumeID === id);
        // }

        // getResumeField: (state) => (id) =>  {
        //     return getField(state.resumes.find(resume => resume.resumeID === id));
        // },

    },
    mutations: {


        //cv create start
        updateField,
        addEmptySkillComp(state, payload) {
            state.skillsSec.skills.push(payload);
        },
        setResumeSate(state, payload) {
            state.resume = payload[0];
            state.resumeLoaded = true;
            console.log('committed');
        },
        updateCommonInput(state, payload) {
            this.state.person[payload.modelName] = payload.value;
            console.log('committed');
        },
        setScreenMobility(state, payload) {
            state.mobile = payload;
        },
        filterResumes(state, payload) {
            state.resumes = state.resumes.filter((resume) => {
                return resume.resumeID !== payload;
            })
        },
        addItemObject(state, payload) {
            if (payload === 'jobItem') {
                state.resume.employmentHistorySec.employmentHistories.push({
                    position: null,
                    employer: null,
                    startDate: null,
                    endDate: null,
                    startAndEndDate: null,
                    city: null,
                    description: null,
                })
            }
            if (payload === 'skillItem') {
                state.resume.skillsSec.skills.push({
                    name: null,
                    level: 'Expert',
                })
            }
        },
        deleteItemObject(state, payload) {
            if(payload.itemType === 'jobItem') {
                console.log(payload.index);
                state.resume.employmentHistorySec.employmentHistories = state.resume.employmentHistorySec.employmentHistories.filter((item, index) => {
                    return index !== payload.index;
                });
            }
            if(payload.itemType === 'skillItem') {
                console.log(payload.index);
                state.resume.skillsSec.skills = state.resume.skillsSec.skills.filter((item, index) => {
                    return index !== payload.index;
                });
            }
        },


        // cv avatar photo setters
        resumeFileNameChange(state, payload) {
            state.resume.resumePhotoName = payload;
        },
        resumeCreateFileURL(state, payload) {
            state.resume.resumePhotoFileURL = payload;

        },
        // resume photo
        setResumePhotoFile(state, payload) {
            state.resumePhotoFile = payload;
        },
        removeResumePhotoFile(state, payload) {
            state.resume.resumePhotoFile = payload;
            state.resumePhotoFile = payload;

        },

        //cv create end




        resetBlogInputs(state) {
                state.blogHTML = "Write your blog title here...";
                state.blogTitle = "";
                state.blogPhotoName = "";
                state.blogPhotoFileURL = null;
        },
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
        },

        // statedeki bosh blogumuzu currenBlog ile evezle
        // ve edit sehifesinde bu current blogu stateden watch et
        // sonda ise
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
            const resumeDB = await db.collection('resumes').doc();
            await resumeDB.set({
                resumeID: resumeDB.id,
                profileId: this.state.profileId,
                date: timestamp,
                personalDetailsSec: {
                    sectionTitle: 'Personal Details',
                    jobTitle: '',
                    photoName: '',
                    photoFileURL: null,
                    photoPreview: null,
                    firstName: '',
                    lastName: '',
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
            this.$router.push({
                name: 'EditResume',
                params: { resumeid: resumeDB.id },
            });
        },
        async getResumes({ state }, payload) {
            const resumesCollection = await db.collection('resumes').orderBy('date', 'desc');
            const allResumes = await resumesCollection.get();

            // bu yol ile her defe butun resumler state-a gedirdi
            // allResumes.forEach((resume) => {
            //     state.resumes.push(resume.data());
            // })

            // bu yo ile ise sadece state-de olmayan resumelar state gedecek
            // statede olmayan resume varsa dbden state-a elave et
            allResumes.forEach((resume) => {
                if (!state.resumes.some(stateResume => stateResume.resumeID === resume.id) && payload === resume.data().profileId) {
                        state.resumes.push(resume.data());
                }
            });
            // state.resumeLoaded = true;
        },
        async updateResume() {
            // update resume here
        },
        async deleteResume({commit}, payload) {
            const getResume = await db.collection('resumes').doc(payload);
            await getResume.delete();

            // delete from local state
            commit('filterResumes', payload);

        }
        //
        // Resume Actions End
        //

    },
    modules: {},
    // strict: true,

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

