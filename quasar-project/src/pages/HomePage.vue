<template>
  <div class="flex column">
    <h1>Hola Mundo</h1>
    <div>
      <q-btn
        class="q-ma-md"
        color="primary"
        glossy
        label="Primary"
        to="/daybook"
      />
      <q-btn class="q-ma-md" color="secondary" glossy label="Secondary" />
      <q-btn class="q-ma-md" color="accent" glossy label="Accent" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>
