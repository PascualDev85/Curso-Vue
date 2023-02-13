const app = Vue.createApp({
  //  options API
  data() {
    return {
      quote: "I'm Batman",
      author: "Bruce Wayne",
    };
  },

  methods: {
    changeQuote() {
      console.log("changeQuote");
      //   palabra reservada this
      this.author = "David Pascual";

      this.capitalizeQuote();
    },
    capitalizeQuote() {
      this.quote = this.quote.toUpperCase();
    },
  },
  //   watch: {},
  //   setup() {},
});

// template

app.mount("#app");
