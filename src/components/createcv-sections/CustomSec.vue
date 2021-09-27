<template>
  <div class="section">
    <h2 class="title">Add Section</h2>
    <div class="more-section">
      <div>
        <p><CustomSecIcon />Custom Section</p>
        <p><ActivitiesSecIcon />Extra-curricular Activities</p>
        <p><HobbiesSecIcon />Hobbies</p>
        <p><ReferencesSecIcon />References</p>
      </div>
      <div>
        <p><CoursesSecIcon />Courses</p>
        <p><InternSecIcon />Internships</p>
        <p><LangsSecIcon />Languages</p>
      </div>
    </div>
  </div>
</template>
<script>
import CustomSecIcon from '../../assets/Icons/create-cv/custom-section.svg';
import ActivitiesSecIcon from '../../assets/Icons/create-cv/activities-section.svg';
import HobbiesSecIcon from '../../assets/Icons/create-cv/hobbies.svg';
import ReferencesSecIcon from '../../assets/Icons/create-cv/speaker.svg';
import CoursesSecIcon from '../../assets/Icons/create-cv/courses-section.svg';
import InternSecIcon from '../../assets/Icons/create-cv/internships.svg';
import LangsSecIcon from '../../assets/Icons/create-cv/langs.svg';
export default {
  components: {
    CustomSecIcon,
    ActivitiesSecIcon,
    HobbiesSecIcon,
    ReferencesSecIcon,
    CoursesSecIcon,
    InternSecIcon,
    LangsSecIcon,
  },
  data() {},
  methods: {},
};
</script>