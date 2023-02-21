<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Daybook </q-toolbar-title>

        <div>
          <q-btn outline icon="logout" style="white: black" label="Logout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="320"
      :breakpoint="400"
    >
      <q-scroll-area
        style="height: calc(100% - 2px); border-right: 1px solid #ddd"
      >
        <q-input
          class="q-ma-md"
          icon="search"
          outlined
          v-model="text"
          label="Search"
        >
          <template #append>
            <q-btn icon="search" flat round dense v-close-popup />
          </template>
        </q-input>
        <q-list padding>
          <EntryList v-for="link in 100" :key="link" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EntryList from "../modules/daybook/components/EntryList.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EntryList,
    // Navabr,
    // EntryList,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      link: [{ to: "/id", name: "Daybook por Id", id: 10 }],
    };
  },
});
</script>
