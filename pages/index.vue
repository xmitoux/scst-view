<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        scst-volculator
      </h1>
      <h2 class="subtitle">
        Voltage calculator for LoveLive! School Idol Festival ALL STARS.
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <v-btn color="primary" fab small dark @click="redirectToTwitterLogin">
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import firebase from '~/plugins/firebase';
import Logo from '~/components/Logo.vue';

const provider = new firebase.auth.TwitterAuthProvider();

export default defineComponent({
  setup() {
    onMounted(() => {
      firebase
        .auth()
        .getRedirectResult()
        .then(result => {
          if (result.credential) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            // const token = result.credential.accessToken;
            // const secret = result.credential.secret;
            // ...
          }
          // The signed-in user info.
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // const credential = error.credential;
          // // ...
          console.log(error);
        });
    });
    const redirectToTwitterLogin = () =>
      firebase.auth().signInWithRedirect(provider);

    return {
      redirectToTwitterLogin,
    };
  },

  components: {
    Logo,
  },
});
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  div {
    background-color: aqua;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
