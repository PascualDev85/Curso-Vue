<template>
  <q-page class="q-pa-xl">
    <span class="text-h1">Formularios</span>
    <q-separator spaced />
    <!-- filled: el campo del input lleno (gris)
    hint: texto de ayuda
    label: texto de la etiqueta
    lazy-rules: para que no se valide al escribir
-->
    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-sm col-xs-12 col-sm-12 col-md-5 q-mt-xl"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Email *"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password"
          label="Contraseña *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Repetir Contraseña *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
            isSamePassword,
          ]"
        />

        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
        <!-- <q-field
          filled
          v-model="userForm.policy"
          :rules="[isChecked]"
          lazy-rules
        > -->
        <q-checkbox
          v-model="userForm.conditions"
          label="Acepto las condiciones y terminos de uso"
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color: red'
          "
        />
        <!-- <template v-slot>
            <q-checkbox
              v-model="userForm.policy"
              label="Acepto las condiciones y terminos de uso"
              color="green"
            />
          </template>
        </q-field> -->
        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "FormsPage",
  setup() {
    const $q = useQuasar();

    // no es un Compisition Function
    const userForm = ref({
      email: "",
      password: "",
      password2: "",
      conditions: false,
      errorInConditions: false,
    });

    return {
      userForm,
      onSubmit() {
        console.log(userForm.value);

        // cuando tengo el checkbox se resetea el valor
        userForm.value.errorInConditions = false;

        if (!userForm.value.conditions) {
          $q.notify({
            message: "Debe de aceptar las condiciones",
            icon: "las la-exclamation-circle",
          });
          userForm.value.errorInConditions = true;
          return;
        }
      },
      onReset() {
        userForm.value = {
          email: "",
          password: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
          policy: false,
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "El correo no parece ser válido";
      },
      isSamePassword(val) {
        return (
          val === userForm.value.password || "Las contraseñas no coinciden"
        );
      },
      isChecked(val) {
        return val || "Debe de aceptar las condiciones y términos de uso";
      },
    };
  },
});
</script>
