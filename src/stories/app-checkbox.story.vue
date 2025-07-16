<template>
  <Story
    id="AppCheckbox"
    responsive-disabled
    title="AppCheckbox"
    :layout="{ type: 'grid', width: '40%' }"
  >
    <Variant title="default">
      <div class="p-8 rounded bg-white dark:bg-gray-700 dark:text-white!">
        <AppCheckbox v-model="checkboxValue1">Checkbox 1</AppCheckbox>
        <AppCheckbox v-model="checkboxValue2">Checkbox 2</AppCheckbox>
      </div>
    </Variant>
    <Variant title="disabled">
      <div class="p-8 rounded bg-white dark:bg-gray-700 dark:text-white!">
        <AppCheckbox disabled>Checkbox 1</AppCheckbox>
        <AppCheckbox
          model-value
          disabled
        >
          Checkbox 2
        </AppCheckbox>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AppCheckbox from '@/uikit/app-checkbox.vue';

const checkboxValue1 = ref(true);
const checkboxValue2 = ref(false);
</script>
