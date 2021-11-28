<template>
<div class="settings">
  <VueSlickCarousel v-bind="settings">
    <div class="template-card" @click="$emit('changeTemplateNameEmit', 'Sherlock')">
      <h2>Sherlock</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform.webp")'>
        <TickIcon class="icon"/>
      </div>
    </div>
    <div class="template-card" @click="$emit('changeTemplateNameEmit', 'BasicTheme')">
      <h2>Basic</h2>
      <div class="img-container">
        <img :src='require("@/assets/templates/cvform2.webp")'>
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

import TickIcon from "../assets/Icons/create-cv/tick.svg"
export default {
  name: "SelectTemplateSettings",
  components: {
    VueSlickCarousel,
    TickIcon
  },
  data() {
    return {
      settings : {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  height: 200px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 103;
  background-color: #000;



  .slick-slider {
    height: 100%;
    //margin-top: 100px;


    .slick-current {
      .template-card {
        img {
          box-shadow: 0 0 3px 5px greenyellow;
        }
      }
    }


  }

}
.template-card {
  padding: 6px 20px;


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
      //box-shadow: 0 0 1px 3px rgb(33, 150, 243);
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
    //box-shadow: 0 0 1px 3px rgb(33, 150, 243);

    .icon {
      display: block;
    }
  }
}
</style>
