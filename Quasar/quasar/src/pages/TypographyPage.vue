<template>
  <q-page class="flex column q-pa-md">
    <!-- <h1>TypographyPage.vue</h1> -->
    <span class="text-h1 q-mb-sm">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <!-- <hr> -->
    <q-separator />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator />
    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <q-separator />
    <span class="text-caption">Caption Text</span>
    <span class="text-overline">Caption Text</span>
    <q-separator />

    <span class="text-bold"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >
    <span class="text-weight-light text-right"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >
    <span class="text-weight-regular text-strike"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >
    <span class="text-weight-medium text-no-wrap"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >
    <span class="text-weight-bold text-capitalize"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >
    <span class="text-weight-bolder text-uppercase"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia.</span
    >

    <q-separator />

    <q-btn color="primary" label="Arbrir menú lateral" class="q-mt-md" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TypographyPage",
});
</script>
