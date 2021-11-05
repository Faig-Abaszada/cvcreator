<template>
  <div class="resume-doc">
    <h1>
      {{ resume.personalDetailsSec.firstName }}
      {{ resume.personalDetailsSec.lastName }}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>end</li>
      </ul>
    </h1>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  name: 'BasicTheme',
  props: ['resume'],
};
</script>
<style>
.resume-doc {
  width: 21cm;
  height: 29.7cm;
  background-color: #98a1b3 !important;
  color: #f2f7f6;
  padding: 40px;
}













































</style>
