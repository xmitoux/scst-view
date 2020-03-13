<template>
  <v-btn icon @click="$nuxt.$emit(eventName)">
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    eventName: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return {
      eventName: props.eventName,
    };
  },
});
</script>
