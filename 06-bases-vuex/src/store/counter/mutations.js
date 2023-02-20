export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};

export const incrementBy = (state, val) => {
  state.count += val;
  state.lastMutation = "incrementBy" + val;
  state.lastRandomInt = val;
};

export const decrement = (state) => {
  state.count--;
  state.lastMutation = "decrement";
};

export const setLoadging = (state, val) => {
  state.isLoading = val;
  state.lastMutation = "setLoading" + val;
};
