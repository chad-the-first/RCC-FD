<template>
  <q-page class="row items-center justify-evenly">
    <h1>{{ $t('welcome') }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { },
  setup() {
    return { };
  },
});
</script>
