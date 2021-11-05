<template>
  <div>
    <div class="section">
      <div class="section-header">
        <h2 class="title">
          static personal detail title
          <EditIcon class="icon" />
        </h2>
      </div>

      <div class="section-inner">
        <div class="inputs">
          <div class="input">
            <label for="job-title">Wanted Job Title</label>
            <input type="text" id="job-title" />
          </div>
          <div class="input">
            <input type="file" id="upload-photo" />
            <label for="upload-photo" class="upload-photo"
              ><UserIcon />Upload photo</label
            >
          </div>
        </div>
        <div class="inputs">
          <div class="input">
            <label>First Name</label>
<!--            <input type="text" id="first-name" v-model="FirstName"/>-->
            <CommonInput :inputValue.sync="personalDetailsSec.firstName"/>
          </div>
          <div class="input">
            <label >Last Name</label>
<!--            <input type="text" id="last-name" />-->
            <CommonInput :inputValue.sync="personalDetailsSec.lastName"/>
          </div>
        </div>
        <div class="inputs">
          <div class="input">
            <label for="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div class="input">
            <label for="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <transition name="additional-details">
          <div v-show="showAdditionalDetails" class="additional-details">
            <div class="inputs">
              <div class="input">
                <label for="country">Country</label>
                <input type="text" id="country" />
              </div>
              <div class="input">
                <label for="city">City</label>
                <input type="text" id="city" />
              </div>
            </div>
            <div class="inputs">
              <div class="input">
                <label for="address">Address</label>
                <input type="text" id="address" />
              </div>
              <div class="input">
                <label for="postal-code">Postal Code</label>
                <input type="text" id="postal-code" />
              </div>
            </div>
            <div class="inputs">
              <div class="input">
                <label for="driving-license">Drivin Lisense</label>
                <input type="text" id="driving-license" />
              </div>
              <div class="input">
                <label for="nationality">Nationality</label>
                <input type="text" id="nationality" />
              </div>
            </div>
            <div class="inputs">
              <div class="input">
                <label for="place-of-birth">Place Of Birth</label>
                <input type="text" id="place-of-birth" />
              </div>
              <div class="input">
                <label for="date-of-birth">Date Of Birth</label>
                <input type="text" id="date-of-birth" />
              </div>
            </div>
          </div>
        </transition>
      </div>
      <button
        class="btn"
        @click="showAdditionalDetails = !showAdditionalDetails"
      >
        Edit Additional Details<ArrowIcon class="icon" />
      </button>
    </div>
  </div>
</template>
<script>
import UserIcon from '../../assets/Icons/create-cv/upload-user.svg';
import ArrowIcon from '../../assets/Icons/create-cv/arrow-right.svg';
import EditIcon from '../../assets/Icons/create-cv/editicon.svg';

import CommonInput from "../CommonInput";
// import CommonInputDirect from "../CommonInputDirect";
import {mapFields} from "vuex-map-fields";

export default {
  name: 'PersonalDetailsSec',
  components: {
    UserIcon,
    ArrowIcon,
    EditIcon,
    CommonInput,
  },
  props: ['personalDetailsSec'],
  data() {
    return {
      showAdditionalDetails: false,
      routeID: null,
    };
  },
   created() {
    //  this.routeID = this.$route.params.resumeid;
    //  this.$store.dispatch('getResumes');
    // const currentResume =   this.$store.state.resumes.filter((resume) => {
    //   return resume.resumeID === this.routeID
    // });
    // this.$store.commit('setResumeSate', currentResume);
  },
  computed: {
    ...mapFields([
      'resumeDocName'
    ]),
  },

};
</script>
