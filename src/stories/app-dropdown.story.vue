<template>
  <Story
    id="AppDropdown"
    responsive-disabled
    title="AppDropdown"
  >
    <Variant title="AppDropdown">
      <div class="p-8 w-100">
        <app-dropdown
          v-model="modelValue"
          :options="options"
        >
          <template #trigger="{ toggle }">
            <app-button
              style-strategy="neutral"
              @click="toggle"
            >
              {{ selectedOption?.displayName ?? 'Select option' }}
            </app-button>
          </template>
          <template #option="{ option, select }">
            <button
              class="p-2 text-white! dark:text-white! text-left cursor-pointer w-full"
              @click="select(option)"
            >
              {{ option.displayName }}
            </button>
          </template>
        </app-dropdown>
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import AppButton from '@/uikit/app-button.vue';
import AppDropdown from '@/uikit/app-dropdown.vue';

const modelValue = ref('1');

const options = [
  {
    id: '1',
    displayName: 'Dropdown Option 1',
  },
  {
    id: '2',
    displayName: 'Dropdown Option 2',
  },
  {
    id: '3',
    displayName: 'Dropdown Option 3',
  },
];

const selectedOption = computed(() =>
  options.find((option) => option.id === modelValue.value),
);
</script>
