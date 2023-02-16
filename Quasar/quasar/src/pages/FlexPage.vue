<template>
  <q-page>
    <div class="row q-mb-xl">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <div class="row q-mb-xl">
      <!-- el row tiene solo 12 columnas -->
      <div class="col bg-primary"></div>
      <div class="col col-6 bg-secondary"></div>
      <div class="col col-5 bg-accent"></div>
    </div>

    <div class="row q-mb-xl justify-center">
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-xl justify-end">
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>

    <div class="row q-mb-xl justify-between">
      <div class="col col-4 bg-primary"></div>
      <div class="col col-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-xl justify-between">
      <div class="col-12 col-sm-5 col-md-4 bg-primary"></div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary"></div>
    </div>

    <q-separator spaced />

    <div class="column q-mb-md bg-dark items-center">
      <div class="square-box bg-primary q-ma-lg"></div>
      <div class="square-box bg-secondary q-ma-lg"></div>
      <div class="square-box bg-accent q-ma-lg"></div>
    </div>

    <div
      class="column custom-height q-mb-md bg-dark items-center justify-center"
    >
      <div class="square-box bg-primary q-ma-lg"></div>
      <div class="square-box bg-secondary q-ma-lg"></div>
      <div class="square-box bg-accent q-ma-lg"></div>
    </div>

    <div
      class="column custom-height q-mb-md bg-dark items-center justify-between"
    >
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div
      class="column custom-height q-mb-md bg-dark items-center justify-between"
    >
      <div class="square-box bg-primary"></div>
      <div class="square-box self-end bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="q-gutter-md">
      <q-btn color="brown" label="Button" />
    </div>

    <q-btn color="brown" label="Button" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexPage",
});
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 100px;
}

.square-box {
  width: 100px;
  height: 100px;
}

.custom-height {
  height: 600px;
}
</style>
