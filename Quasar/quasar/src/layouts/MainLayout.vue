<template>
  <q-layout view="lHh Lpr lFf">
    <!-- El código de arriba: header, body y footer -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleSideMenu()"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <!-- TODO: <div>Quasar v{{ $q.version }}</div> -->
        <!-- Esto $q es una variable global -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <!-- q-drawer barra lateral -->
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <!-- componente EssentialLink que lo define abajo en Components (scripts) -->
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <!-- sería la parte del logo  -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

// import { storeToRefs } from "pinia";

import linksList from "../router/link-list";
// import { useUi } from "../stores/ui";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    // const store = useUi();
    // const { isSideMenuOpen } = storeToRefs(store);
    // const { toggleSideMenu } = store;
    // console.log(store);

    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      // isSideMenuOpen,
      // toggleSideMenu,
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  // methods: {
  //   toggleSideMenu() {
  //     this.$store.commit("ui/toggleSideMenu");
  //   },
  // },
});
</script>
