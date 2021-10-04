<template>
  <div>
    <div class="section">
      <div class="section-header">
        <h2 class="title">Personal Details<EditIcon class="icon" /></h2>
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
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div class="input">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" />
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

export default {
  components: {
    UserIcon,
    ArrowIcon,
    EditIcon,
  },
  data() {
    return {
      showAdditionalDetails: false,
    };
  },
};
</script>