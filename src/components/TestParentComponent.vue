<template>
<div class="boxes">
  <div class="box">
    <TestChildComponent class="theme-card"></TestChildComponent>
    <div class="content">kdkjk</div>
  </div>
  <div class="box">
    <TestChildComponent class="theme-card"></TestChildComponent>
  </div>
  <div class="box">
      <TestChildComponent class="theme-card"></TestChildComponent>
  </div>
</div>
</template>

<script>
import TestChildComponent from "./TestChildComponent";
export default {
  name: "TestParentComponent",
  components: {
    TestChildComponent
  }
}
</script>

<style scoped>
.boxes {
  display: flex;
}
.box {
  width: 300px;
  height: 300px;
  position: relative;
  border: 2px solid #2196f3;

}
.theme-card {
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.2);
  transform-origin: 0 0;
  border: 2px solid #000;
}
.content {
  position: absolute;
  right: 0;
}
</style>
