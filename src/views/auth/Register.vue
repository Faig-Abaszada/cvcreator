<template>
  <div class="form-wrap">
    <form class="register" :class="{'loadingIs': signing}">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create Your asan-cv Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="userName" />
          <user class="icon" />
        </div>

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

      <button class="primary-button" @click.prevent="register">Sign Up</button>
      <img class="loading-gif" v-if="signing" :src='require("@/assets/gifs/dotted-loading.gif")'>

      <div class="angle"></div>
    </form>

    <div class="background"></div>
  </div>
</template>

<script>
import emailIcon from '../../assets/Icons/envelope-regular.svg';
import passwordIcon from '../../assets/Icons/lock-alt-solid.svg';
import user from '../../assets/Icons/user-alt-light.svg';

import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../../firebase/firebaseInit';

export default {
  name: 'Register',
  components: {
    emailIcon,
    passwordIcon,
    user,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      error: null,
      errorMsg: '',
      signing: null,
    };
  },
  methods: {
    async register() {
      this.signing = true;
      if (
        (this.email !== '') &
        (this.password !== '') &
        (this.firstName !== '') &
        (this.lastName !== '') &
        (this.userName !== '')
      ) {
        this.error = false;
        this.errorMsg = '';
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password,
        );
        const result = await createUser;
        const dataBase = db.collection('users').doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });
        this.$router.push({ name: 'Home' });
        setTimeout(()=> {
          this.signing = false;
        },100);
        return;
      }
      this.error = true;
      this.errorMsg = 'Please fill out all the fields';
    },
  },
};
</script>

<style lang="scss" scoped>
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
.register {
  h2 {
    max-width: 350px;
  }
  .primary-button:focus {
    outline: 2px solid #000;
  }
}
</style>
