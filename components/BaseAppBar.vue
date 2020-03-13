<template>
  <div>
    <v-navigation-drawer v-model="navDrawer" app clipped>
      <v-list dense nav>
        <v-list-item
          v-for="navMenu in navMenus"
          :key="navMenu.title"
          :to="navMenu.path"
        >
          <v-list-item-icon>
            <v-icon>{{ navMenu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ navMenu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="navDrawer = !navDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <slot name="slot1"></slot>
      <slot name="slot2"></slot>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

interface NavMenu {
  icon: string;
  title: string;
  path: string;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    const navDrawer = ref(null);
    const navMenus: NavMenu[] = [
      {
        icon: 'mdi-playlist-music',
        title: 'ライブ編成',
        path: '/unit-list',
      },
      {
        icon: 'mdi-face-woman',
        title: '所持スクールアイドル',
        path: '/school-idol-list',
      },
      {
        icon: 'mdi-ring',
        title: '所持アクセサリー',
        path: '/accessory-list',
      },
    ];

    return {
      navDrawer,
      navMenus,
    };
  },
});
</script>

<style lang="scss" scoped></style>
