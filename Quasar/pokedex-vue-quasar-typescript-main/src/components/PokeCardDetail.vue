<template>
    <q-card class="detail-card fixed">
      <q-card-section>
        <div class=" detail-card__upper ">
          <div class="text-h6 detail-card__upper__name">
            <span>{{data.name}}</span>
          </div>
          <q-btn class="close-button" icon="close" flat v-close-popup />

        </div>

      </q-card-section>

      <q-separator inset />
      <q-card-section>
          <div class="detail-card__bottom">
            <q-img :src="data.sprites.other.home.front_default" alt="pokemon-image" :ratio="1" class="poke-img"/>
            <div class="row abilities text-center justify-center ">
              <div  v-for="ability in data.abilities" :data="ability" :key="ability.ability.name" class="abilities__name">{{ ability.ability.name }} </div>
            </div>
            <div class="text-h6 text-center" style="color: #b74555;">Base Stats</div>

            <div class="row stats" >
                <div class="stats__row" v-for="stat in data.stats" :key="stat.stat.name">
                    <div class="stats__row__desc">{{ stat.stat.name }}</div>
                    <div class="stats__row__number">{{ stat.base_stat }}</div>
                    <div class="stats__row__bar">
                        <div class="stats__row__bar__outer">
                            <div class="stats__row__bar__inner" :style="{width: `${stat.base_stat}%`}"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPokemon } from './models'
export default defineComponent({
  name: 'PokeCardDetail',
  props: {
    data: {
      type: Object as PropType<IPokemon>,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
.detail-card {
  background-color: grey;
  width: 300px;
  height: 500px;
  border-radius: 10px;
    &__upper{
      margin: -10px 0px 0px 0px;
      color: white;
      height: 150px;
      border-radius: 10px;
      background-image: url('../assets/pokeball.png');
      background-repeat: no-repeat ;
      background-position: right;
      background-size: 150px 150px ;
      display: flex;
      justify-content: space-between;
      &__name:first-letter {
      text-transform: uppercase;
      }

    }
    &__bottom{
      border-radius: 5px;
      background-color: white;
      color: grey;
      margin: -20px -10px -10px -10px;
      padding-top: 65px;
      height: 320px;

    }

}
.close-button{
        height: 26px;
        margin-top:0;
        padding: 0
      }
.poke-img {
  position: fixed;
  width: 190px;
  transform: translateY(-12.5rem) translateX(3rem);
}
.abilities {

  &__name {
    width: max-content;
    background-color: #b74555;
    color: white;
    padding: 0.5rem;
    font-size: 12px;
    font-weight: bold;
    border-radius: 8px;
    margin: 0.3rem

  }
  &__name:first-letter{
    text-transform: capitalize;
  }
}
.stats {
    width: 100%;
    font-size: 0.7rem;
    gap: 0.5rem;
    margin-top: 0.8rem ;
    &__row {
      display: flex;
      &__desc {
        width: 200px;
        text-transform: uppercase;
        color:   #b74555;
        font-weight: bold;
        text-align: right;
        margin-right: 0.6rem;
        transition: color 0.5s ease-in-out;
      }
      &__number {
        border-left: 1px solid gray;
        text-align: right;
        padding-left: 0.5rem;
      }
      &__bar {
        width: 76%;
        display: flex;
        align-items: center;
        padding-left: 0.6rem;
        margin-left:1rem ;
        justify-content: right;
        &__outer {
            background-color: #eb7887;
            display: flex;
            width: 100%;
            height: 0.3rem;
            border-radius: 4px;
            transition: 0.5s ease-in-out;
        }
        &__inner {
            background-color: #b74555;
            border-radius: 4px;
            transition: 0.5s ease-in-out;
        }
      }
  }

}

</style>
