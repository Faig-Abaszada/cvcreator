<template>
  <div>
    <div class="section">



      <EditableText :value.sync="personalDetailsSec.sectionTitle" :movable="false"/>



      <div class="section-inner">
        <div class="inputs">
          <div class="input">
            <label for="job-title">Wanted Job Title</label>
            <CommonInput :inputValue.sync="personalDetailsSec.jobTitle"/>
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
            <CommonInput :inputValue.sync="personalDetailsSec.email"/>
          </div>
          <div class="input">
            <label for="phone">Phone</label>
            <CommonInput :inputValue.sync="personalDetailsSec.phone"/>
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
import CommonInput from "../CommonInput";
import EditableText from "../EditableText";

import { mapFields } from 'vuex-map-fields';

export default {
  name: 'PersonalDetailsSec',
  components: {
    UserIcon,
    ArrowIcon,
    CommonInput,
    EditableText
  },
  props: {
    personalDetailsSec: {
      type: Object
    }
  },
  data() {
    return {
      showAdditionalDetails: false,
      editing: false,
      sectionTitleValue: null,
    };
  },
  methods: {
    enableEditing() {
      this.sectionTitleValue = this.personalDetailsSec.sectionTitle;
      this.editing = true;
    },
    disableEditing() {
      this.editing = false;
      this.resume.personalDetailsSec.sectionTitle = this.sectionTitleValue;
    }
  },
  computed: {
    ...mapFields([
        'resume'
    ])
  }


};
</script>
<style lang="scss" scoped>

</style>
