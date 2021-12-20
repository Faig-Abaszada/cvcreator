<template>
  <header class="header">
    <!--    desktop menu-->
    <nav>
      <div class="branding">
        <router-link to="/">
          <img :src="logo" alt="" />
        </router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link v-show="this.$route.name === 'Resumes'" class="link upgrade" :to="{ name: 'Home' }">
            <UpgradeIcon class="upgrade-icon" />Upgrade Now
          </router-link>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>


          <!-- v-show="admin"    idi bunu sildik biz hele sehife uzerinde ishleyirik!! -->
          <!--  ve bize admin deyi adi user de giris etdikde create cv gorunsun isteyirik ona gore basqa condition yarat -->
          <router-link v-show="user" class="link" :to="{ name: 'Resumes' }"
            >Create My CV</router-link
          >
          <router-link v-show="admin" class="link" :to="{ name: 'CreatePost' }"
            >Create Post</router-link
          >
          <router-link v-show="!user" class="link" :to="{ name: 'Login' }"
            >Login/Register
          </router-link>
        </ul>

        <button
          v-if="user && !this.mobile"
          @click="profileMenu = !profileMenu"
          @blur="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
                    <span v-show="!profilePhoto">{{ this.$store.state.profileInitials }}</span>
                    <span>
                      <img :src="`data:image/jpeg;base64,${this.profilePhoto}`" v-if="this.profilePhoto">
                    </span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <span v-show="!profilePhoto">{{ this.$store.state.profileInitials }}</span>
              <span>
                <img :src="`data:image/jpeg;base64,${this.profilePhoto}`" v-if="this.profilePhoto">
              </span>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
<!--              <div class="option" v-show="admin">-->
<!--                <router-link class="option" :to="{ name: 'Admin' }">-->
<!--                  <adminIcon class="icon" />-->
<!--                  <p>Admin</p>-->
<!--                </router-link>-->
<!--              </div>-->
              <div @click="signOut" class="option">
                <signOutIcon class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </button>

      </div>
    </nav>

    <!--    mobile menu-->
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">

      <ul class="mobile-nav" v-show="mobileNav">

        <div class="branding">
            <img :src="logo" alt="" />
        </div>

        <XIcon @click="toggleMobileNav" class="close-icon" v-show="mobile" />

        <h2 class="user-title">
            {{ this.$store.state.profileFirstName }}
            {{ this.$store.state.profileLastName }}
        </h2>

        <router-link v-show="this.$route.name === 'Resumes'" class="upgrade" :to="{ name: 'Home' }">
          <UpgradeIcon class="upgrade-icon" />Upgrade Now
        </router-link>

        <router-link class="link"
                     router-link-exact-active
                     :to="{ name: 'Home' }">
          Home
        </router-link>
        <router-link class="link" router-link-exact-active :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link v-show="user" class="link" router-link-exact-active :to="{ name: 'Resumes' }"
          >Create CV</router-link
        >
        <router-link v-show="admin" class="link" router-link-exact-active :to="{ name: 'CreatePost' }"
          >Create Post</router-link
        >
        <router-link v-show="!user" class="link" router-link-exact-active :to="{ name: 'Login' }"
          >Login/Register
        </router-link>

        <div v-if="user" class="mt-5">
          <router-link class="option" :to="{ name: 'Profile' }">
            <userIcon class="icon" />
            <p>Account Settings</p>
          </router-link>
          <div @click="signOut" class="option">
            <signOutIcon class="icon" />
            <p>Log Out</p>
          </div>
        </div>
      </ul>
    </transition>
  </header>
</template>

<script>
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/Icons/bars-regular.svg';
import XIcon from '../../assets/Icons/create-cv/close-x.svg';
import userIcon from '../../assets/Icons/user-alt-light.svg';
// import adminIcon from '../../assets/Icons/user-crown-light.svg';
import signOutIcon from '../../assets/Icons/sign-out-alt-regular.svg';

import UpgradeIcon from '../../assets/Icons/upgrade.svg';

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Navigation',
  components: {
    menuIcon,
    userIcon,
    signOutIcon,
    // adminIcon,
    UpgradeIcon,
    XIcon
  },
  data() {
    return {
      profileMenu: true,
      logo: logo,
      mobile: null, // screen is mobile or not
      mobileNav: null, //  if mobile nav is open
      windownWidth: null,
    };
  },
  watch:{
    $route (){
      this.mobileNav = false;
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen); // ekran olculeri deyisen kimi checkscreen ishe dussun
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 1020) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu() {
      setTimeout(() => {
        this.profileMenu = false;
      },200)
      // if (e.target === this.$refs.profile) {
      //
      // }
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push("/", () => {});
      });
      // window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
    profilePhoto() {
      return this.$store.state.resume.resumePhotoFile;
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;


  .branding {
    display: flex;
    align-items: center;
    img {
      width: 100px;
    }
  }

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  .upgrade {
    //max-width: 100px;
    background-color: #2196f3;
    color: #fff;
    //padding: 6px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

  }
  .upgrade-icon {
    width: 30px;
    height: 30px;

  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;



    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }

      .profile {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #000;
        text-transform: uppercase;
        background-color: #ffffff;
        box-shadow: 0 0 5px 0px #0F141F;

        span {
          pointer-events: none;
        }
        img {
          //position: absolute;
          //top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: scale-down;
          padding: 3px;



        }

        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #0F141F;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          color: #fff;
          border-radius: 10px;
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;

            img {
              background-color: #f1f1f1;
              box-shadow: 0 0 5px 0px #fff;
            }


            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: #fff;
              color: #303030;
              display: flex;
              align-items: center;
              //justify-content: center;
              border-radius: 50%;
            }

            .right {
              flex: 1;
              margin-left: 24px;
              text-align: left;

              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }


            }
          }

          .options {
            padding: 15px;

            .option {
              text-decoration: none;
              color: #fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
                margin-bottom: 0;
              }

              &:last-child {
                margin-bottom: 0px;
              }

              //a {
              //  display: flex;
              //  align-items: center;
              //}
            }
          }
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
    height: 40px;
    width: auto;
  }


  .mobile-nav {
    padding-top: 120px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    height: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;

    .link {
      padding: 10px 0;
      margin-bottom: 2px;
      color: #000;
    }
    .upgrade {
      text-decoration: none;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .user-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .icon {
      width: 20px;
    }
    .option {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;
      padding-bottom: 20px;
      p {
        margin-bottom: 0;
        margin-left: 10px;
        font-weight: 500;
      }
    }
    .router-link-exact-active {
      //border-bottom: 2px solid #2196f3;
      color: #2196f3;
    }
    .close-icon {
      border: 1px solid #e7e5e5;
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 20px;
      height: 40px;
      width: auto;
    }
    .branding {
      position: absolute;
      top: 30px;
      left: 20px;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.5s ease;
  }

  // transition burda sehifeden kenar baslayir
  .mobile-nav-enter {
    transform: translateX(-100%);
  }
  // transition burda sehife icinde bitir
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  // transition burda sehifeden geri cekilir yani menu geri qayidir
  .mobile-nav-leave-to {
    transform: translateX(-100%);
  }
}

</style>
