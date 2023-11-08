<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card bg-white q-px-md q-py-md rounded-borders-16">
      <div class="row justify-center">
        <q-img
          src="images/boost-login-logo.svg"
          fit="contain"
          style="width: 258px; height: 174px;"
          class="q-mb-lg"
        />
      </div>
      <q-input outlined v-model="email" label="Enter Email Address" class="q-mb-md">
        <template v-slot:prepend>
          <q-icon name="o_email" />
        </template>
      </q-input>
      <q-input type="password" outlined v-model="password" label="Password" class="q-mb-md">
        <template v-slot:prepend>
          <q-icon name="o_lock" />
        </template>
        <template v-slot:append>
          <q-icon name="o_visibility" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="text-right q-mb-md">
        <q-link to="/forget-password" class="text-primary text-weight-bold cursor-pointer">
          Forget Password
        </q-link>
      </div>
      <q-btn unelevated rounded color="primary" label="Sign In" class="full-width" />
      <q-btn flat color="primary" label="Sign into RCC" class="full-width" />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  component: {},
  setup() {
    const email = ref('');
    const password = ref('');
    return { email, password };
  },
});
</script>
