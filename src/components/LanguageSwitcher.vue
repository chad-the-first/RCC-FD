<template>
  <q-select
    v-model="selectedLanguage"
    :options="languageOptions"
    emit-value
    map-options
    dense
    options-dense
    color="black"
    standout
    filled
    border-rad
    square
    bg-color="blue-2"
    @input="changeLanguage"
  />
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const selectedLanguage = ref<string>(locale.value);
    const languageOptions = [
      { label: 'English', value: 'en-US' },
      { label: 'French', value: 'fr-FR' },
      // Add more languages here
    ];

    const changeLanguage = (newLanguage: string) => {
      locale.value = newLanguage;
    };

    watch(selectedLanguage, (newLanguage) => {
      locale.value = newLanguage;
    });

    return { selectedLanguage, languageOptions, changeLanguage };
  },
};
</script>
