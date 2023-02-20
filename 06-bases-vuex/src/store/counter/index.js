import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
  namespaced: true,
  state,

  //   algo parecido a los metodos de una clase. Tiene que ser síncrono y cambian el estado
  mutations,
  //   Son asincronos y no cambian el estado. Llaman a las mutaciones
  actions,

  //   Son como computed properties. Devuelven un valor calculado basado en el estado
  getters,
};

export default counterStore;
