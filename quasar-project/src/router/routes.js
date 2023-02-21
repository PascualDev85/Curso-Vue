import HomePageVue from "src/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageVue,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("pages/AboutPage.vue"),
  },

  {
    path: "/daybook",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "no-entry",
        component: () => import("../modules/daybook/views/NoEnrySelected.vue"),
      },
      {
        path: ":id",
        name: "entry",
        component: () => import("../modules/daybook/views/EntryView.vue"),
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
