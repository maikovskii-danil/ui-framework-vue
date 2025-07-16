<template>
  <Story
    id="AppCheckbox"
    responsive-disabled
    title="AppCheckbox"
    :layout="{ type: 'grid', width: '40%' }"
  >
    <Variant title="default">
      <div class="p-8 rounded bg-white dark:bg-gray-700 dark:text-white!">
        <AppCheckbox>Checkbox 1</AppCheckbox>
        <AppCheckbox
          checked
          model-value
        >
          Checkbox 2
        </AppCheckbox>
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
import AppCheckbox from '@/uikit-in-dev/app-checkbox.vue';
</script>
