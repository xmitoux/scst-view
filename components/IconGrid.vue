<template>
  <v-container>
    <div v-for="src in srcList" :key="src">
      <v-img :src="requireSrc(src)" />
    </div>
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
