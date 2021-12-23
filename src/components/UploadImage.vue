<template>
<div class="upload-image-wrapper">
  <div class="inner">
    <div>

      <input
          ref="input"
          type="file"
          name="image"
          accept="image/*"
          @change="setImage"
      />

      <div class="content" v-show="cropImg && !rendering">
        <section class="cropper-area">
          <div class="img-cropper">
            <vue-cropper
                ref="cropper"
                :aspect-ratio="3 / 4"
                :src="imgSrc"
                preview=".preview"

            />
          </div>



          <section class="preview-area">
            <div class="preview" />
            <div class="cropped-image">
              <img
                  v-if="cropImg"
                  :src="cropImg"
                  alt="Cropped Image"
              />
              <div v-else class="crop-placeholder" />
            </div>
          </section>




          <div class="actions">
<!--           <div class="zoom">-->
<!--             <a-->
<!--                 href="#"-->
<!--                 role="button"-->
<!--                 @click.prevent="zoom(0.2)"-->
<!--                 class="zoom-in"-->
<!--             >-->
<!--               <zoom-plus-icon class="icon"/>-->
<!--             </a>-->
<!--             <a-->
<!--                 href="#"-->
<!--                 role="button"-->
<!--                 @click.prevent="zoom(-0.2)"-->
<!--                 class="zoom-out"-->
<!--             >-->
<!--               <zoom-minus-icon class="icon"/>-->
<!--             </a>-->
<!--           </div>-->
           <div class="move">
             <a
                 href="#"
                 role="button"
                 @click.prevent="move(10, 0)"
                 class="left"
             >
               <arrow-icon class="icon" />
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="move(-10, 0)"
                 class="right"
             >
               <arrow-icon class="icon" />
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="move(0, 10)"
                 class="up"
             >
               <arrow-icon class="icon" />
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="move(0, -10)"
                 class="down"
             >
               <arrow-icon class="icon" />
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="zoom(0.2)"
                 class="zoom-in"
             >
               <zoom-plus-icon class="icon"/>
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="zoom(-0.2)"
                 class="zoom-out"
             >
               <zoom-minus-icon class="icon"/>
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="rotate(90)"
                 class="r-left"
             >
               <rotate-icon class="icon"/>
             </a>
             <a
                 href="#"
                 role="button"
                 @click.prevent="rotate(-90)"
                 class="r-right"
             >
               <rotate-icon class="icon"/>
             </a>
           </div>

<!--            <a-->
<!--                ref="flipX"-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="flipX"-->
<!--            >-->
<!--              Flip X-->
<!--            </a>-->
<!--            <a-->
<!--                ref="flipY"-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="flipY"-->
<!--            >-->
<!--              Flip Y-->
<!--            </a>-->

            <!--            <a-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="reset"-->
<!--            >-->
<!--              Reset-->
<!--            </a>-->
<!--            <a-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="getData"-->
<!--            >-->
<!--              Get Data-->
<!--            </a>-->
<!--            <a-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="setData"-->
<!--            >-->
<!--              Set Data-->
<!--            </a>-->
<!--            <a-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="getCropBoxData"-->
<!--            >-->
<!--              Get CropBox Data-->
<!--            </a>-->
<!--            <a-->
<!--                href="#"-->
<!--                role="button"-->
<!--                @click.prevent="setCropBoxData"-->
<!--            >-->
<!--              Set CropBox Data-->
<!--            </a>-->
            <button class="primary-button" @click="uploadPhoto">Save Changes</button>
          </div>

        </section>
<!--        sjhhjsghjgsjhgsjhjgsh-->
      </div>

      <button class="primary-button" @click.prevent="showFileChooser" v-show="!cropImg && !rendering">Upload Image</button>
      <img class="loading-gif" v-show="rendering" :src='require("@/assets/gifs/dotted-loading.gif")'>
    </div>

    <button class="primary-button close-button" @click="closeModal">
      <x-icon class="icon"/>
    </button>

  </div>
</div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import ArrowIcon from "../assets/Icons/create-cv/arrow-right.svg";
import XIcon from "../assets/Icons/create-cv/close-x.svg";
import ZoomPlusIcon from "../assets/Icons/search-plus-solid.svg";
import ZoomMinusIcon from "../assets/Icons/search-minus-solid.svg";
import RotateIcon from "../assets/Icons/rotate.svg";
import { mapFields } from "vuex-map-fields";
export default {
  components: {
    VueCropper,
    ArrowIcon,
    ZoomPlusIcon,
    ZoomMinusIcon,
    RotateIcon,
    XIcon,

  },
  data() {
    return {
      imgSrc: null,
      cropImg: '',
      data: null,
      rendering: false,
    };
  },
  mounted() {
    this.cropImg = this.resume.resumePhotoFile;
    this.imgSrc = this.resume.resumePhotoFile;
  },
  methods: {
    uploadPhoto() {
      this.$store.commit('setResumePhotoFile', this.cropImg.split(',')[1]);
      this.resume.resumePhotoFile = this.resumePhotoFile;
      this.closeModal();
      // this.resume.resumePhotoFile = this.cropImg.split(',')[1];

    },
    closeModal() {
      // this.$store.commit('setResumePhotoFile', this.cropImg.split(',')[1])
      this.cropImg = null;
      this.imgSrc = null;
      this.$emit('closeModal', false);
    },
    setImage(e) {
      this.rendering = true;

      const file = e.target.files[0];
      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          this.cropImg = event.target.result;
          setTimeout(() => {
            this.rendering = false;
          },500);
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);

          setTimeout(() => {
            this.move(1, 1);
          }, 100);

        };
        reader.readAsDataURL(file);


      } else {
        alert('Sorry, FileReader API not supported');
      }


    },


    flipX() {
      const dom = this.$refs.flipX;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleX(scale);
      dom.setAttribute('data-scale', scale);
    },
    flipY() {
      const dom = this.$refs.flipY;
      let scale = dom.getAttribute('data-scale');
      scale = scale ? -scale : -1;
      this.$refs.cropper.scaleY(scale);
      dom.setAttribute('data-scale', scale);
    },
    getCropBoxData() {
      this.data = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4);
    },
    getData() {
      this.data = JSON.stringify(this.$refs.cropper.getData(), null, 4);
    },
    move(offsetX, offsetY) {
      this.$refs.cropper.move(offsetX, offsetY);
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    reset() {
      this.$refs.cropper.reset();
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();

    },
    setCropBoxData() {
      if (!this.data) return;
      this.$refs.cropper.setCropBoxData(JSON.parse(this.data));
    },
    setData() {
      if (!this.data) return;
      this.$refs.cropper.setData(JSON.parse(this.data));
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    zoom(percent) {
      this.$refs.cropper.relativeZoom(percent);
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
  },
  computed: {
    ...mapFields([
        'resume',
        'resumePhotoFile',
    ])
  },
};
</script>

<style lang="scss" scoped>
.upload-image-wrapper {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 105;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    width: 50%;
    height: 80vh;
    background-color: #0F141F;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: relative;

    .loading {
      width: 100px;
    }

    button {
      align-self: end;
      margin: 0 auto;
    }

    @media (max-width: 800px) {
      width: 95%;
    }
  }

  .close-button {
    background-color: #202435;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    top: 10px;
    right: 10px;

    .icon {
      width: 25px;
    }

  }

.move {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
      ". up . .  zoom-in . zoom-out"
      "left . right . . . ."
      ". down . .  r-left . r-right"
;

  margin-bottom: 50px;

  a {
    background-color: #2196f3;
    border-radius: 3px;
    margin: 5px;
    //padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .icon {
    width: 40px;
    color: #fff;
  }
  .up {
    grid-area: up;

    .icon {
      transform: rotate(-90deg);
    }
  }
  .down {
    grid-area: down;
    .icon {
      transform: rotate(90deg);
    }
  }
  .left {
    grid-area: left;
    .icon {
      transform: rotate(180deg);
    }
  }
  .right {
    grid-area: right;
    .icon {
      transform: rotate(0deg);
    }
  }
  .zoom-in {
    grid-area: zoom-in;
    background-color: transparent;
  }
  .zoom-out {
    grid-area: zoom-out;
    background-color: transparent;
  }
  .r-left {
    grid-area: r-left;
    background-color: transparent;

  }
  .r-right {
    grid-area: r-right;
    background-color: transparent;
    .icon {
      transform: scaleX(-1);
    }

  }
}

}
input[type="file"] {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}
.header h2 {
  margin: 0;
}
.header a {
  text-decoration: none;
  color: black;
}
.content {
  display: flex;
  justify-content: space-between;
}
.cropper-area {
  width: 614px;
  //width: 100%;
}
.img-cropper {
  display: none;
}

.actions {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .zoom {

    .icon {
      width: 35px;
      color: #fff;
    }
  }
}
.actions a {
  //display: inline-block;
  //padding: 5px 15px;
  //background: #0062CC;
  //color: white;
  //text-decoration: none;
  //border-radius: 3px;
  //margin-right: 1rem;
  //margin-bottom: 1rem;
}
textarea {
  //width: 100%;
  //height: 100px;
}
.preview-area {
  width: 307px;
  //width: 100%;

}
.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}
.preview-area p:last-of-type {
  margin-top: 1rem;
}
.preview {
  //width: 100%;
  //height: calc(372px * (9 / 16));
  overflow: hidden;
}
.crop-placeholder {
  width: 200px;
  //height: 200px;
  background: #ccc;
}
.cropped-image {
  //width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px !important;
    border-radius: 10px;
  }
}
.cropper-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
