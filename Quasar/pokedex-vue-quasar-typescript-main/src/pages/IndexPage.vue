<template>
  <q-page class="row items-center justify-evenly">

    <div class="row col-md-12 col-xs-12 button-container">
        <q-btn @click="prev" color="red" class="button-control"  icon="navigate_before"  label="Previous" />
        <q-btn @click="next" color="red" class="button-control"  icon-right="navigate_next"  label="Next" />
    </div>

    <div class="row text-center text-white justify-evenly ">
      <PokeCard class="container-list" @click="getData(pokemon); alert = true" v-for="pokemon in data" :data="pokemon" :key="pokemon.name"/>
    </div>

    <q-dialog v-model="alert">
      <PokeCardDetail v-if="detailData" :data="detailData" class="box"/>
    </q-dialog>

    <q-dialog v-model="seamless" seamless position="bottom">
      <q-card class="bg-yellow text-black" style="width: 350px">

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">INFO</div>
            <div>Click The Pokemon to See Details</div>
          </div>

          <q-space />
          <q-btn flat round icon="close" v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import axios from 'axios'
import { IPokemon } from 'src/components/models'
import PokeCardDetail from 'src/components/PokeCardDetail.vue'
import PokeCard from 'src/components/PokeCard.vue'
import { defineComponent, reactive, toRefs, watchEffect, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: { PokeCardDetail, PokeCard },
  setup () {
    const data = reactive({
      nextUrl: '',
      prevUrl: '',
      data: [] as IPokemon[],
      detailData: null as IPokemon | null
    })
    const urlAPI = ref('https://pokeapi.co/api/v2/pokemon/')
    const getData = (pokemon: IPokemon) => {
      data.detailData = pokemon
    }
    const next = () => {
      if (data.nextUrl) {
        data.data = []
        urlAPI.value = data.nextUrl
      } else {
        console.log('err')
      }
    }
    const prev = () => {
      if (data.prevUrl) {
        data.data = []
        urlAPI.value = data.prevUrl
      } else {
        console.log('err')
      }
    }

    watchEffect(() => {
      axios.get(urlAPI.value)
        .then(async (res) => {
          data.nextUrl = res.data.next
          data.prevUrl = res.data.previous
          return res.data.results
        })
        .then(res => {
          res.map(async (item:any) => {
            const tempData = await axios.get(item.url).then(res => res.data)
            data.data = [...data.data, tempData]
            data.data.sort((a, b) => a.id > b.id ? 1 : -1)
          })
        })
        .catch(err => {
          console.log(err)
        })
        // .then(res => console.log(data))
    })
    return {
      ...toRefs(data),
      getData,
      next,
      prev,
      alert: ref(false),
      seamless: ref(true)
    }
  }

})
</script>
<style lang="scss">
.box{
  background-color: red;
}
.container-list{
  cursor: pointer;
}
.card-img{
    width: 100px;
    height: 100px;
}
.button-container{
  justify-content: space-between;
}
.button-control {
  width: 140px;
  margin: 1rem;
}

</style>
