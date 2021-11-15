<template>
  <div class="overlay">
    <div class="overlay-scrim" role="dialog">
      <div class="modals">
        <h1>choose template component is here</h1>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "SelectTemplate",
  components: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.overlay {
  z-index: 201;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: auto;
  display: flex;
}
.overlay-scrim {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modals {
  background-color: #f1f1f1;
  display: flex;
  width: 500px;

}
</style>
