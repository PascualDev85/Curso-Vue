import { createRouter, createWebHashHistory } from "vue-router";
import isAutheticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    beforeEnter: [isAutheticatedGuard],
    component: () => import("@/modules/pokemon/layouts/PokemonLayout.vue"),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/ListPage.vue"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () => import("@/modules/pokemon/pages/AboutPage.vue"),
      },
      {
        path: "pokemonid/:id",
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
        path: "",
        name: "pokemon",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  // DBZ Layout

  {
    path: "/dbz",
    name: "dbz",
    component: () => import("@/modules/dbz/layouts/DbzLayout.vue"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () => import("@/modules/dbz/pages/CharcactersPage.vue"),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () => import("@/modules/dbz/pages/AboutPage.vue"),
      },
      {
        path: "",
        name: "dbz",
        redirect: { name: "dbz-characters" },
      },
    ],
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

//Guard global - Síncrono
// router.beforeEach((to, from, next) => {
//   console.log({ to, from, next });

//   protego la ruta a través de un random
//   const random = Math.random() * 100;
//   console.log(random);
//   if (random > 50) {
//     console.log("Acceso permitido");
//     next();
//   } else {
//     console.log(random, "Acceso denegado por el beforeEach Guard");
//     next({ name: "pokemon-home" });
//   }

//   next();
// });

//Guard global - Asíncrono
// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;

//     if (random > 50) {
//       console.log("Acceso permitido - canAccess");
//       resolve(true);
//     } else {
//       console.log(
//         random,
//         "Acceso denegado por el beforeEach Guard - CanAccess"
//       );
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const auth = await canAccess();

//   auth ? next() : next({ name: "pokemon-home" });
// });

export default router;
