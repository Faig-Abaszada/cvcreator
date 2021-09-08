<template>
  <header>
<!--    desktop menu-->
    <nav class="container">

      <div class="branding">
        <router-link class="header" to="/">
          <img :src="logo" alt="">
        </router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!mobile ">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Cv</router-link>
          <router-link class="link" :to="{ name: 'Login' }">Login/Register </router-link>
        </ul>
      </div>

    </nav>

<!--    mobile menu-->
    <menuIcon @click="toggleMobileNav" class="menu-icon"  v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav" >
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Cv</router-link>
        <router-link class="link" :to="{ name: 'Login' }">Login/Register </router-link>
      </ul>
    </transition>

  </header>
</template>

<script>
import logo from '../assets/logo.png'
import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
  name: "Navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
      logo: logo,
      mobile: null, // screen is mobile or not
      mobileNav: null, //  if mobile nav is open
      windownWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen); // ekran olculeri deyisen kimi checkscreen ishe dussun
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if(this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {

        img {
          width: 100px;
        }
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color:  #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
     transition: all 1s ease ;
  }

  // transition burda sehifeden kenar baslayir
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  // transition burda sehife icinde bitir
  .mobile-nav-enter-to  {
    transform: translateX(0);
  }
  // transition burda sehifeden geri cekilir yani menu geri qayidir
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

}
</style>
