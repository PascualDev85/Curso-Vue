<template>
  <h1>Counter - Vuex</h1>
  <!-- <h2>Direct Access: {{ $store.state.counter.count }}/h2> -->
  <h2>Computed: {{ counComputed }}</h2>
  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h2>Direct getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CounterCom",
  // computed: mapState(["count"]),

  computed: {
    counComputed() {
      return this.$store.state.counter.count;
    },
    // Lo más común
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
    // evitar choques de nombres
    // ...mapState({
    //   counter: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
  },
  methods: {
    increment() {
      // esto es para acceder directamente al store
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
      // this.randomInt();
    },
    decrement() {
      this.$store.commit("counter/decrement");
    },
    // incrementRandom() {
    //   this.$store.dispatch("incrementRandom");
    // },
    // ...mapActions("counter", ["incrementRandom"]),
    ...mapActions("counter", {
      randomInt: "incrementRandom",
    }),
  },
};
</script>
