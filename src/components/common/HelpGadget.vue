<template>
<div class="help-gadget">

  <div class="help-box">

  </div>

  <button class="gadget-button">
    <QuestionIcon class="icon"/>
  </button>
</div>
</template>

<script>
import QuestionIcon from "../../assets/Icons/create-cv/question-light.svg"
export default {
  name: "HelpGadget",
  components: {
    QuestionIcon,
  }
}
</script>

<style lang="scss" scoped>
.help-gadget {
  background-color: #2196f3;
  border-radius: 50%;
  padding: 30px;

  &:hover {
    background-color: rgb(27, 138, 228);

  }
  .icon {
    color: #fff;
    width: 50px;
    height: 50px;
  }
}
</style>
