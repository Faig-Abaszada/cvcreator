<template>
  <div class="modal" :class="from">
    <div class="modal-content">
      <TickIcon class="tick-icon"/>
      <p >{{ this.modalMessage }}</p>
      <button class="close-button" @click="closeModal">
        <XIcon class="icon"/>
      </button>
    </div>
  </div>
</template>

<script>
import TickIcon from '../../assets/Icons/create-cv/tick.svg';
import XIcon from '../../assets/Icons/create-cv/close-x.svg';


export default {
  name: "Modal",
  props: ["modalMessage", "from"],
  components: {
    TickIcon,
    XIcon
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.7);

    .modal-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 8px;
      width: 300px;
      padding: 40px 30px;
      background-color: #fff;
      position: relative;

      p {
        text-align: center;
      }


      button {
        align-self: center;
      }
      .close-button {
        position: absolute;
        top: 0;
        right: 0;

        .icon {
          width: 50px;
          color: rgba(131, 131, 131, 0.42);

          &:hover {
            color: rgba(131, 131, 131, 0.65);
          }
        }

      }
    }
  }
  .tick-icon {
    display: none;
  }
  .updated {
    p {
      color: green;
    }
    .tick-icon {
      display: block;
      color: green;
    }
  }
</style>
