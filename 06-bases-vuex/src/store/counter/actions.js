import getRandomInt from "@/helpers/getRandomint";

export const incrementRandom = async ({ commit }) => {
  commit("setLoadging", true);

  const randomInt = await getRandomInt();

  commit("incrementBy", randomInt);

  commit("setLoadging", false);
};
