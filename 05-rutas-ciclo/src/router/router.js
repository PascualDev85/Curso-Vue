import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/ListPage.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/pokemon/pages/AboutPage.vue"),
  },
  {
    path: "/pokemonid/:id",
    name: "pokemon-id",
    props: (route) => {
      // console.log(route)
      // const { id } = route.params;
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 1 } : { id: id };
    },
    component: () => import("@/modules/pokemon/pages/PokemonPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/modules/shared/pages/NoPageFound.vue"),
    // redirect: "/home",
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
