<template>
  <Story
    id="AppSelect"
    responsive-disabled
    title="AppSelect"
  >
    <Variant title="AppSelect">
      <AppSelect
        v-model="currentOption"
        :options="[
          { id: '1', displayName: 'Dropdown Option 1' },
          { id: '2', displayName: 'Dropdown Option 2' },
          { id: '3', displayName: 'Dropdown Option 3' },
        ]"
      />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import AppSelect from './app-select.vue';
import { ref } from 'vue';

const currentOption = ref('1');
</script>
