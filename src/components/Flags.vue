<template>
  <div class="lang-section">
    <div class="lang-center">
      <button @click="isShow = !isShow" @blur="toggle" class="current-lang">
        <az-flag class="flag-svg" />Azerbaijan
      </button>
      <ul class="lang-list" v-show="isShow">
        <li><h6>Resume Language</h6></li>
        <li><az-flag class="flag-svg" />Azerbaijan</li>
        <li><us-flag class="flag-svg" />English</li>
        <li><tr-flag class="flag-svg" />Turkish</li>
        <li><ru-flag class="flag-svg" />Russian</li>
      </ul>
    </div>
  </div>
</template>

<script>
import AzFlag from '../assets/Icons/flags/az.svg';
import TrFlag from '../assets/Icons/flags/tr.svg';
import UsFlag from '../assets/Icons/flags/us.svg';
import RuFlag from '../assets/Icons/flags/ru.svg';
export default {
  name: "Flags",
  components: {
    AzFlag,
    TrFlag,
    UsFlag,
    RuFlag
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    toggle() {
      setTimeout(() => {
        this.isShow = false
      }, 200);
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.lang-section  {
  .lang-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flag-svg {
    height: 13px;
    display: block;
    margin-right: 5px;
  }

  .current-lang {
    display: flex;
    align-items: center;
    height: 15px;
    cursor: pointer;
    color: #838383;
    &:hover {
      color: #2196f3;
    }
  }
  .lang-list {
    background-color: #0F141F;
    color: #fff;
    padding: 15px;
    border-radius: 4px;
    max-height: 210px;
    overflow-y: scroll;
    margin: 0 auto;
    position: fixed;
    @media (max-width: 800px) {
      width: 90%;
      font-size: 1.3rem;
    }

    li {
      display: flex;
      align-items: center;
      padding: 5px 0;
      cursor: pointer;
      @media (max-width: 800px) {
        padding: 8px 0;

      }
    }
  }



}
</style>
