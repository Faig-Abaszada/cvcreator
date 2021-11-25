<template>
  <div class="modal">
    <div class="modal-content">
      <XIcon @click="closeModal" class="exit-icon"/>
      <div class="left">
        <OverLimit class="icon"/>
      </div>
      <div class="right">
        <h2>You are over the resume limit</h2>
        <p>Only one resume is available on the free plan. Upgrade your plan to create an unlimited number of resumes.</p>

        <h4>Also unlock</h4>
        <ul>
          <li><Tick class="icon"/> All templates</li>
          <li><Tick class="icon"/> Unlimited cover letters</li>
        </ul>

        <div class="d-flex">
          <button  class="primary-button">Upgrade Now</button>
          <button  class="primary-button">Skip</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tick from "../../assets/Icons/create-cv/tick.svg";
import OverLimit from "../../assets/Icons/create-cv/overlimit.svg";
import XIcon from "../../assets/Icons/create-cv/close-x.svg";
export default {
  name: "Modal",
  components: {
    Tick,
    OverLimit,
    XIcon
  },
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
      console.log('clicked')
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
      flex-direction: row;
      justify-content: center;
      border-radius: 8px;
      width: 800px;
      padding: 40px 30px;
      background-color: #fff;
      position: relative;


      .exit-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        color: #98a1b3;
      }

      .left {
        flex: 1;

        .icon {
          padding: 30px;
        }
      }
      .right {
        flex: 1;
        p {
          text-align: center;
        }
        ul {
          list-style: none;
          padding-left: 0;
          .icon {
            width: 20px;
          }
        }
        .primary-button {
          margin-right: 20px;
          padding: 5px 25px;
        }
      }
    }
  }

</style>
