<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="src in srcList" :key="src" cols="3" sm="2" lg="1">
        <v-img
          v-ripple
          :src="requireSrc(src)"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    srcList: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    // カスタムコンポーネントにassetを渡すにはrequireが必要
    const requireSrc = (src: string) => require(`~/assets/icons/${src}`);

    return {
      requireSrc,
    };
  },
});
</script>

<style lang="scss" scoped></style>
