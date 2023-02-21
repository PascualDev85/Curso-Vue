<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <!-- <q-item-label>15</q-item-label>
      <q-item-label caption>Julio</q-item-label> -->
      <EntryC />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    EntryC: defineAsyncComponent(() => import("./EntryC.vue")),
  },
};
</script>
