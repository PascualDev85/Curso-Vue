<template>
  <q-item clickable tag="a" @click="navigateTo">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
      <!-- caption es lo mismo que :caption="true", cuando maneje un valor booleana por defecto es true le pasa al componente respectivo -->
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
// Composition Functions
import { useRouter } from "vue-router";
export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // en el setup podemos recibir los props de EssentialLink que están en el MainLayout
    // No se puede desestructurar los props en el setup porque pierde la Reactividad
    console.log("EssentialLink", props);

    const router = useRouter();

    return {
      navigateTo() {
        props.link.startsWith("http")
          ? window.open(props.link, "_blank")
          : router.push(props.link);
      },
    };
  },
});
</script>
