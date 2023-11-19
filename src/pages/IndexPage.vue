<template>
  <q-page class="row items-center justify-evenly">
    <div class="p-5 bg-slate-100 border shadow rounded-md">
      <h1 class="text-center">{{ $t('welcome') }}</h1>
      <q-form @submit="loginSubmit">
      <div class="q-gutter-md" style="max-width: 400px">
        <q-input
        :rules="[val => /[^@]+@[^.]+\..+/.test(val) || 'Invalid email address']"
        outlined
        v-model="loginForm.userEmail"
        :label="$t('username')"
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
        :label="$t('password')"
        class="q-mb-md">
          <template v-slot:prepend>
            <q-icon name="o_lock" />
          </template>
      </q-input>
      </div>
      <q-btn
      unelevated
      rounded
      to="/maps"
      color="primary"
      :label="$t('signin')"
      class="full-width"
      />
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface LoginForm {
  userEmail: string;
  userPassword: string;
}

export default defineComponent({
  name: 'IndexPage',
  components: { },
  setup() {
    const isPasswordVisible = false;
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
