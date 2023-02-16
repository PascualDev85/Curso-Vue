import { defineStore } from "pinia";

export const useUi = defineStore("ui", {
  state: () => ({
    isSideMenuOpen: true,
  }),
  getters: {
    sideMenuIsOpen: (state) => state.isSideMenuOpen,
  },
  actions: {
    toggleSideMenu() {
      this.SET_SIDE_MENU_OPEN(!this.isSideMenuOpen);
    },
  },
  mutations: {
    SET_SIDE_MENU_OPEN(isOpen) {
      this.isSideMenuOpen = isOpen;
    },
  },
});
