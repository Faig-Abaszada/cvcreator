<template>
<div class="item">
    <button class="primary-button" >Click</button>
    <div >
      <h1>content here</h1>
    </div>
</div>
</template>

<script>
export default {
  name: "jobItemTest",

  props: [
      'isSelected'
  ],
  data() {
    return {

    }
  },
  computed: {
    iAmSelected () {
      return this.isSelected === this.item.id;
    }
  },
  created() {

  }
}
</script>

<style scoped>
.item {
  width: 500px;
  height: 150px;
  background-color: #303030;
  margin: 5px;
  padding: 5px;
  color: #fff;
  display: flex;
  align-content: center;
  align-self: center;
  margin: 20px auto;


}
</style>
