<template>
  <footer>
    <div class="container">
      <div class="title-button"  v-show="this.$route.name !== 'Resumes'">
          <button class="primary-button">Create a Resume</button>
      </div>
      <div class="middle">
        <div class="social-links">
          <h2>Connect with us on social media</h2>
          <div class="icons">
            <a href="#" class="footer-icon linkedin">
              <Linkedin class="icon-svg"/>
            </a>
            <a href="#" class="footer-icon instagram">
              <Instagram class="icon-svg"/>
            </a>
            <a href="#" class="footer-icon youtube">
              <YouTube class="icon-svg"/>
            </a>
            <a href="#" class="footer-icon facebook">
              <Facebook class="icon-svg"/>
            </a>
          </div>


        </div>
        <div class="nav">
          <div class="links">
            <router-link v-show="this.$route.name === 'Resumes'" class="link upgrade" :to="{ name: 'Home' }" router-link-exact-active>
              <UpgradeIcon class="upgrade-icon" />Upgrade Now
            </router-link>
            <router-link v-show="!user" class="link" :to="{ name: 'Login' }" router-link-exact-active
            >Login/Register
            </router-link>
            <router-link v-show="user" class="link" :to="{ name: 'Resumes' }" router-link-exact-active
            >Create My CV</router-link>

            <router-link class="link" :to="{ name: 'Home' }" router-link-exact-active>Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }" router-link-exact-active>Blogs</router-link>
            <router-link v-show="admin" class="link" :to="{ name: 'CreatePost' }" router-link-exact-active
            >Create Post</router-link>
          </div>
        </div>
      </div>
      <div class="language">
          <div class="lang">
            <img :src='require("@/assets/lang.jpeg")'>
            <p class="name">International</p>
          </div>
      </div>

      <div class="copyright">
        <p>Copyright 2021 - asan-cv.com</p>
      </div>

    </div>
  </footer>
</template>

<script>
import YouTube from '../../assets/Icons/youtube-brands.svg';
import Facebook from '../../assets/Icons/facebook-brands.svg';
import Instagram from '../../assets/Icons/instagram-brands.svg';
import Linkedin from '../../assets/Icons/linkedin-brands.svg';
import UpgradeIcon from '../../assets/Icons/upgrade.svg';
export default {
  name: 'Footer',
  components: {
    YouTube,
    Facebook,
    Instagram,
    Linkedin,
    UpgradeIcon
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 0 25px;
  //margin-top: 150px;
  background-color: #0F141F;
  color: #fff;
  box-shadow: 0 -5px 20px 0px rgba(0, 0, 0, 0.23);
  margin-top: auto;

  .container {
    //display: flex;
    //flex-direction: column;
    //align-items: center;

    .middle {
      display: flex;
      justify-content: space-between;
      max-width: 900px;
      margin: 0 auto;
      padding-top: 40px;

      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .title-button {
    border-bottom: 1px solid #2f2f2f;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      //margin: 0 auto;
      background-color: transparent;
      font-size: 2rem;

      @media (max-width: 800px) {
        font-size: 20px;
      }

    }
  }
  .social-links {
    width: 250px;

    h2 {
      font-size: 24px;
    }

    .icons {
      display: flex;
      //justify-content: center;
    }
    @media (max-width: 800px) {
      h2 {
        text-align: center;
      }
      .icons {
        justify-content: center;
      }
    }

    .footer-icon {
      background-color: #303030;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;

      @media (max-width: 800px) {
        margin: 0 10px;
      }

      .icon-svg {
        height: 25px;
        width: 25px;
        color: #fff;

      }
      &:hover {

      }
    }
    .instagram:hover {
      background-image: linear-gradient(45deg,#f9d86b,#ed634a 50.52%,#ba46a5);
    }
    .youtube:hover {
      background-color: red;
    }
    .facebook:hover {
      background-color: #3b5998;
    }
    .linkedin:hover {
      background-color: #0077b5;
    }
  }
  .nav {

    .links {
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        margin-top: 40px;
        padding-left: 15px;
        border-left: 1px solid #2196f3;
      }

      .link {
        color: #fff;
        padding-bottom: 10px;
      }
      .router-link-exact-active {
        color: #2196f3;
      }
      .upgrade {
        //max-width: 100px;
        background-color: #2196f3;
        color: #fff;
        padding: 6px;
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-bottom: 20px;

      }
      .upgrade-icon {
        width: 30px;
        height: 30px;

      }
    }

  }
  .language {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .lang {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 22px;
        height: 14px;
        background-position: -44px 0;
        margin-right: 5px;
      }
      .name {
        margin-bottom: 0;
        letter-spacing: 1px;
      }
    }

  }
  .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;

    p {
      color: #888888;
    }
  }
}


</style>
