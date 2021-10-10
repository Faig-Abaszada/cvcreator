<template>
  <div>
    <ul>
      <!-- <li>Job Title:{{ resumes[0].personalDetailsSec.jobTitle }}</li> -->
      <li>First name:</li>
      <li>Last name:</li>
      <li>Email:</li>
      <li>Phone:</li>
      <li>Summary:</li>
      <li>Employment:</li>
      <li>Education:</li>
      <li>Social Links:</li>
      <li>
        Skills:
        <ul>
          <!-- <li
            v-for="(skill, index) in resumes[0].skillsSec.skills"
            :key="index"
          >
            {{ skill.skill }}
          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['resumes']),
  },
};
</script>
<style lang="scss" scoped>
</style>