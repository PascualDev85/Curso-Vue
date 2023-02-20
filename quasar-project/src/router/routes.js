import daybookRouter from "../modules/daybook/router";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/HomePage.vue") },
      { path: "/about", component: () => import("pages/AboutPage.vue") },
    ],
  },
  // {
  //   path: "daybook",
  //   ...daybookRouter,
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;