<template>
  <div class="modal">
    <div class="modal-content">
      <XIcon @click="closeModal" class="exit-icon"/>


        <h2>Are you sure want to delete this entry?</h2>
       <div class="buttons">
         <button  class="delete primary-button" @click="deleteItem">Delete</button>
         <button  class="primary-button" @click="closeModal">Cancel</button>
       </div>


    </div>
  </div>
</template>

<script>
// import Tick from "../../assets/Icons/create-cv/tick.svg";
import XIcon from "../../assets/Icons/create-cv/close-x.svg";
export default {
  name: "DeleteModal",
  components: {
    // Tick,
    XIcon
  },
  props: [],
  methods: {
    closeModal() {
      this.$emit("close-modal");
      console.log('clicked')
    },
    deleteItem() {
      this.$emit('deleteItemEmit');
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
  z-index: 103;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0,0,0,0.7);


  .modal-content {
    border-radius: 8px;
    width: 800px;
    padding: 40px 30px;
    background-color: #fff;
    position: relative;

    .buttons {
      display: flex;
      justify-content: end;

      .primary-button {
        margin-right: 20px;
        padding: 10px 25px;
      }
      .delete {
        background-color: transparent;
        color: #000;
        border: 1px solid rgba(0, 0, 0, 0.18);
      }
    }


    .exit-icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      color: #98a1b3;
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

    }
  }
}

</style>
