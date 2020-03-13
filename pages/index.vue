<template>
  <div class="text-center">
    <v-btn class="ma-2 text-none" color="info" @click="signInWithTwtter">
      <v-icon left>mdi-twitter</v-icon>
      Twitterでログイン
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import firebase from '~/plugins/firebase';

export default defineComponent({
  setup(_, context) {
    const signInWithTwtter = () => {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => context.root.$router.push('/unit-list'));
    };

    return {
      signInWithTwtter,
    };
  },
});
</script>

<style lang="scss"></style>
