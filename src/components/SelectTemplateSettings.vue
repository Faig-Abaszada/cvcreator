<template>
<div class="settings">
  <VueSlickCarousel v-bind="settings">
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" >
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
  </VueSlickCarousel>
</div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "SelectTemplateSettings",
  components: { VueSlickCarousel },
  data() {
    return {
      settings : {
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500,
        "useCSS": true,
        "useTransform": true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  height: 300px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 103;
  background-color: #000;



  .slick-slider {
    height: 100%;
    display: flex;
    align-items: end;
    padding-bottom: 10px;

    .slick-slide {
    }

    .slick-current {

      .template-card {
        padding: 0 5px;

        img {
          box-shadow: 0 0 3px 5px greenyellow;

        }


        &:after {
          content: "";
          display: block;
          height: 0;
          width: 100%;
          margin-top: 10px;
          background-color: transparent;
          //box-shadow: 0 2px 50px 10px #98a1b3;
        }
      }
    }


  }

}
.template-card {
  padding: 0 20px;


  height: 100%;
  &:hover {
    cursor: pointer;
  }
  h2 {
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  .img-container {
    position: relative;
    border-radius: 5px;

    &:hover {
      box-shadow: 0 0 1px 3px rgb(33, 150, 243);
    }

    img {
      position: relative;
      border-radius: 5px;
      width: 100%;


    }
    .icon {
      color: #fff;
      width: 40px;
      height: 40px;
      padding: 5px;
      background-color: rgb(33, 150, 243);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }

  }
  .active {
    box-shadow: 0 0 1px 3px rgb(33, 150, 243);

    .icon {
      display: block;
    }
  }
}
</style>
