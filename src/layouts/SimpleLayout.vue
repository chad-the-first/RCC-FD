<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-app-primary text-white q-px-140">
      <div class="row flex justify-end">
        <q-img
        src="/images/basf-logo.png"
        alt="basf-logo"
        fit="contain"
        style="width: 224px;height: 76px;"/>
      </div>
    </q-header>

    <q-page-container class="bg-app-primary text-white">
      <router-view />
    </q-page-container>

    <q-footer class="bg-app-primary text-white">
      <div class="flex full-width column wrap  content-center">
        <q-img
        src="/images/locke-and-partners.png"
        alt="basf-logo"
        fit="contain"
        style="width: 269px; height: 87px;"
        />
        <p class="text-center q-pt-md">powered by Locke & Partners</p>
      </div>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleLayout',
  components: { },
  setup() {
    return {
    };
  },
});
</script>
