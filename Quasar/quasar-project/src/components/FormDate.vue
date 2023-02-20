<template>
  <div class="q-pa-md q-mt-md">
    <q-table
      title="Productos"
      :rows="products"
      :columns="columns"
      row-key="name"
      no-data-label="No hay productos que mostrar"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: "product",
    label: "Producto",
    field: "product",
    align: "left",
    sortable: true,
  },
  {
    name: "priority",
    label: "Prioridad",
    field: "priority",
    align: "left",
    sortable: true,
  },
];

export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style></style>
