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
      <div class="p-8 mt-4 rounded bg-white dark:bg-gray-700 dark:text-white!">
        <AppRadio
          v-model="defaultState"
          value="option1"
        >
          Option 1
        </AppRadio>
        <AppRadio
          v-model="defaultState"
          value="option2"
        >
          Option 2
        </AppRadio>
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
import AppRadio from '@/uikit/app-radio.vue';

const checkboxValue1 = ref(true);
const checkboxValue2 = ref(false);

const defaultState = ref('option1');
</script>
