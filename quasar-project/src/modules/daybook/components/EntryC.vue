<template>
  <div class="entry-container q-mb-md pointer q-pa-md" @click="router">
    <div class="entry-title flex">
      <span class="text-bold text-primary text-size text-xl q-mx-sm">15</span>
      <span class="text-size">Julio</span>
      <span class="text-weight-light q-mx-sm">2021, jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, assumenda?
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid black;
  transition: 0.2s all easy-in;

  &:hover {
    background-color: lightten(grey, 45%);
    transition: 0.2s all easy-in;
  }

  .text-size {
    font-size: 20px;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
