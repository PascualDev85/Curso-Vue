<template>
  <q-page class="q-pa-xl">
    <p class="text-h3">Agregar productos</p>
    <q-form
      class="row q-col-gutter-lg"
      @submit="onSubmit"
      @reset="onReset"
      ref="myForm"
    >
      <div class="col-12 col-sm-4">
        <q-input
          v-model="product"
          label="Producto"
          color="secondary"
          lazy-rules
          :rules="[(val) => val.length > 0 || 'Este campo es requerido']"
        >
          <template v-slot:append>
            <q-icon
              color="secondary"
              name="production_quantity_limits"
              class="q-mr-lg"
            />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-sm-4">
        <q-select
          v-model="select"
          label="Precio"
          color="secondary"
          :options="options"
          lazy-rules
          :rules="[(val) => val.length > 0 || 'Este campo es requerido']"
        >
          <template v-slot:append>
            <q-icon color="secondary" name="event" class="q-mr-sm" />
          </template>
        </q-select>
        <div class="col-12">
          <q-toggle v-model="terms" label="Accept terms and conditions" />
        </div>
      </div>
      <div class="col-12 q-glutter-md">
        <q-btn color="deep-orange" glossy label="Deep Orange" type="submit" />
        <q-btn
          color="deep-orange"
          type="reset"
          outline
          label="Deep Orange"
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <form-date :products="products" />
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import FormDate from "src/components/FormDate.vue";

export default {
  components: { FormDate },
  setup() {
    const $q = useQuasar();
    const myForm = ref(null);

    const product = ref(null);
    const select = ref(null);
    const terms = ref(false);
    const options = ["maximum", "minimum", "moderate"];

    const products = ref([]);

    const onSubmit = () => {
      console.log("product");
      if (terms.value === false) {
        $q.notify({
          message: "Debe aceptar los terminos y condiciones",
          color: "red-5",
          textColor: "white",
          icon: "warning",
        });
      } else {
        $q.notify({
          message: "Producto agregado",
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
        });

        products.value = [
          ...products.value,
          {
            product: product.value,
            priority: select.value,
          },
        ];

        myForm.value.resetValidation();
        onReset();

        // Se envia el producto a la base de datos
      }
    };

    const onReset = () => {
      product.value = null;
      select.value = null;
      terms.value = false;
    };

    return {
      product,
      select,
      options,
      terms,
      myForm,
      onSubmit,
      onReset,
      products,
    };
  },
};
</script>

<style></style>
