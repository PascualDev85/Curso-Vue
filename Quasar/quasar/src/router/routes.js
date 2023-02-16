const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        // el name es para que peuda navegar a traves de la app por el nombre de la ruta
        name: "typography",
        component: () => import("pages/TypographyPage.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () => import("pages/FlexPage.vue"),
      },
      {
        path: "dialogs",
        name: "dialogs",
        component: () => import("pages/Dialogs.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("pages/Forms.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
