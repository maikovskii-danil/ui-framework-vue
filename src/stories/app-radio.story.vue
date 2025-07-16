<template>
  <Story
    id="AppRadio"
    responsive-disabled
    title="AppRadio"
    :layout="{ type: 'grid', width: '40%' }"
  >
    <Variant title="default">
      <div class="p-8 rounded bg-white dark:bg-gray-700 dark:text-white!">
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
        <AppRadio
          v-model="disabledState"
          value="option1"
          disabled
        >
          Option 1
        </AppRadio>
        <AppRadio
          v-model="disabledState"
          value="option2"
          disabled
        >
          Option 2
        </AppRadio>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AppRadio from '@/uikit/app-radio.vue';

const defaultState = ref<string>('option1');
const disabledState = ref<string>('option1');
</script>
