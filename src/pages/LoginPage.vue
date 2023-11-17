<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card bg-white q-px-md q-py-md rounded-borders-16">
      <div class="row justify-center">
        <q-img src="/images/boost-login-logo.svg"
          fit="contain"
          style="width: 258px; height: 174px;"
          class="q-mb-lg"
        />
      </div>
      <q-form
        @submit="loginSubmit"
      >
      <q-input
        :rules="[val => /[^@]+@[^.]+\..+/.test(val) || 'Invalid email address']"
        outlined
        v-model="loginForm.userEmail"
        label="Enter Email Address"
        class="q-mb-sm"
        >
        <template v-slot:prepend>
          <q-icon name="o_email" />
        </template>
      </q-input>
      <q-input
        :type="isPasswordVisible ? 'text' : 'password'"
        :rules="[val => val.length >= 6 || 'Password must be at least 6 characters']"
        outlined
        v-model="loginForm.userPassword"
        label="Password"
        class="q-mb-md">
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
          <template v-slot:append>
          <q-icon
            :name="isPasswordVisible ? 'o_visibility_off' : 'o_visibility'"
            class="cursor-pointer"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </q-input>
      <div class="text-right q-mb-md">
        <q-link to="/forget-password" class="text-primary text-weight-bold cursor-pointer">
          Forget Password
        </q-link>
      </div>
      <q-btn unelevated rounded type="submit" color="primary" label="Sign In" class="full-width" />
    </q-form>
      <q-btn flat color="primary" label="Sign into RCC" class="full-width" />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref,
} from 'vue';

interface LoginForm {
  userEmail: string;
  userPassword: string;
}

export default defineComponent({
  name: 'LoginPage',
  component: {},
  setup() {
    const isPasswordVisible = ref(false);
    const loginForm = reactive<LoginForm>({
      userEmail: '',
      userPassword: '',
    });

    const loginSubmit = () => {
      // Login api calls here
    };

    return { loginForm, loginSubmit, isPasswordVisible };
  },
});
</script>
