<template>
  <div class="form-wrap">
    <form class="login" :class="{'loadingIs': signing}">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <h2>Login to asan-cv</h2>
      <div class="inputs">
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <emailIcon class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <passwordIcon class="icon" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your Password</router-link
      >

      <button @click.prevent="signIn" class="primary-button">Sign In</button>
      <img class="loading-gif" v-if="signing" :src='require("@/assets/gifs/dotted-loading.gif")'>



      <div class="angle"></div>

    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import emailIcon from '../../assets/Icons/envelope-regular.svg';
import passwordIcon from '../../assets/Icons/lock-alt-solid.svg';

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',
  components: {
    emailIcon,
    passwordIcon,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errorMsg: '',
      signing: null,
    };
  },
  methods: {
    signIn() {
      this.signing = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: 'Home' });
          setTimeout(()=> {
            this.signing = false;
          },500);
          this.error = false;
          this.errorMsg = '';
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style lang="scss">
.loading-gif {
  width: 100px;
  position: relative;
  z-index: 104;
}
.loadingIs {
  position: relative;
}
.loadingIs:after {
  content: "";
  display: block;
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;

}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;



  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('../../assets/background.png');
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
