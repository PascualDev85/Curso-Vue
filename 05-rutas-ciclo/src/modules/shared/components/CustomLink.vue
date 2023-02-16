<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    class="normal-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ link.name }}
  </a>
  <!-- los v-slot es  -->
  <router-link v-else :to="link.to" v-slot="{ href, isActive }">
    <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">
      {{ link.name }}
    </a>
    <!-- {{ link.name }} -->
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.is-active {
  color: #016b4a;
  text-decoration: underline;
}
.normal-link {
  font-weight: bold;
  color: #3eaf7c;
  text-decoration: none;
}
</style>
