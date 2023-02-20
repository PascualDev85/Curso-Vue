<template>
    <q-card class="list-card ">

        <h6>{{ data.id }}</h6>
        <q-img :src="data.sprites.other.home.front_default" alt="pokemon-image" :ratio="1" class="card-img"/>
        <h6 class="list-card__name">{{ data.name }}</h6>

    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPokemon } from './models'
export default defineComponent({
  name: 'PokeCard',
  props: {
    data: {
      type: Object as PropType<IPokemon>,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.list-card {
  margin: 1rem;
  z-index: 2;
  width: 280px;
  background-color:#9EDEF9;
  color: black;
  border-radius: 1rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__name:first-letter {
    text-transform: uppercase;
  }
}

</style>
