<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link> -->
    <!-- <router-link :to="'/10'">Pokemon por Id</router-link> -->
    <!-- <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
        >Pokemon por Id</router-link> -->
    <!-- <router-link :to="{ name: 'about' }">About</router-link> -->

    <!-- Router Link Personalizado -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Pokemon por Id", id: 16 },
        { to: "pokemon-about", name: "About" },

        { to: "dbz-characters", name: "Personajes" },
        { to: "dbz-about", name: "DBZ-About" },

        { to: "https://www.google.com/", name: "Google" },
      ],
    };
  },

  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #3eaf7c;
  text-decoration: none;
  margin: 0 12px;
}

div a:hover {
  color: #016b4a;
  text-decoration: underline;
}

/* a.router-link-active {
  color: #016b4a;
  text-decoration: underline;
} */
</style>
