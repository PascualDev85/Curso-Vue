<template>
  <h2>{{ customTitle }}!!!</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squared }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squared }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squared }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squared }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ squared }}</p>
    <button @click="increment">+</button>
    <button @click="reset">Reset</button>
    <button @click="decrement">-</button>

</template>

<script>




export default {
    props: // ['title', 'start'],
    {
        title: String,
        start: {
            type: Number,
            // required: true,
            default: 100,
            validator( value ) {
                return value >= 0;
            }
    },
},
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        reset() {
            this.counter = 15;
        }
    },
    computed: {
        squared() {
            // Las propiedades computadas se ejecutan cada vez que se actualiza el componente
            console.log("squared");
            return this.counter * this.counter;
        },
        customTitle() {
            return this.title || "Counter";
        }
    }

}
</script>

<style>

button {
    background-color: #4CAF50;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 10px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}
button:hover {
    background-color: #3e8e41;
    border: 1px solid #3e8e41;
    color: white;}

</style>