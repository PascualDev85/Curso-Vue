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
  <router-link v-else :to="route" v-slot="{ isActive }">
    <!-- href, isActive -->
    <a :class="isActive ? 'is-active' : 'normal-link'">
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
    route() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
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
