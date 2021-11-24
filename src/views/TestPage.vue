<template>
  <div class="cards">
          <div class="card">
            <div class="pdf-wrapper">
              <Pdf />
            </div>
            <div class="content">
              <p>Faig Abaszada</p>
            </div>
          </div>
          <div class="card">
            <div class="pdf-wrapper">
              <Pdf />
            </div>
          </div>
  </div>
</template>

<script>
import Pdf from "../components/test/Pdf";
export default {
  name: "TestPage",
  components: {
    Pdf
  }
}
</script>

<style scoped lang="scss">

.cards {
  display: flex;

  .card {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    border: 2px solid #000;

    .pdf-wrapper {
      transform: scale(0.5);
      transform-origin: 0 0;
      margin-right: calc(300px * -0.5);
      margin-bottom: calc(500px * -0.5);

      .pdf-page {

        //border: 2px solid red;
        //width: 200px;
        //height: 300px;
        //object-fit: cover;
      }
    }
    .content {
      position: relative;
      left: 0;

    }
  }
}


</style>
