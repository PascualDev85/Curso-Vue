<template>
  <q-page class="q-pa-xl">
    <span class="text-h1">Diálogos</span>
    <q-separator spaced />

    <template v-if="name">
      <span class="text-h3"> {{ name }} </span>
      <q-separator spaced />
    </template>

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>

    <q-separator spaced />
    <div class="q-pa-md">
      <q-btn color="purple" @click="showLoading" label="Show Loading" />
    </div>

    <q-separator spaced />
    <div class="q-pa-md">
      <q-btn color="dark" @click="showNotif" label="Show Notification" />
    </div>
  </q-page>
</template>

<script>
// ref es para crear una variable reactiva
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";
import { Notify } from "quasar";

export default defineComponent({
  name: "DialogsPage",
  setup() {
    const $q = useQuasar();
    const name = ref("");

    let timer;

    function alert() {
      $q.dialog({
        title: "Alert",
        message: "Some message",
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function confirm() {
      $q.dialog({
        title: "Confirm",
        message: "Would you like to turn on the wifi?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          // console.log('>>>> OK')
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    function prompt() {
      $q.dialog({
        title: "Prompt",
        message: "What is your name?",
        position: "bottom",
        prompt: {
          model: "",
          type: "text", // optional
        },
        cancel: true,
        persistent: true,
      })
        .onOk((data) => {
          console.log(">>>> OK, received", data);
          name.value = data;
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    return {
      showLoading() {
        $q.loading.show();

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
        }, 2000);
      },
      showNotif() {
        $q.notify({
          message: "Jim pinged you.",
          color: "purple",
          position: "bottom-right",
        });
      },

      alert,
      confirm,
      prompt,
      name,
    };
  },
});
</script>
