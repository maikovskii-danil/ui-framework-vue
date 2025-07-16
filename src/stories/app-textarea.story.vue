<template>
  <Story
    id="AppTextarea"
    responsive-disabled
    title="AppTextarea"
    :layout="{ type: 'grid', width: '40%' }"
  >
    <Variant title="default">
      <div class="flex flex-col gap-4">
        <div>AppInput:</div>
        <AppInput
          v-model="inputValue"
          placeholder="Enter text"
        />
        <div>AppTextarea:</div>
        <AppTextarea
          v-model="textareaValue"
          placeholder="Enter text"
        />
      </div>
    </Variant>
    <Variant title="disabled">
      <div class="flex flex-col gap-4">
        <div>AppInput:</div>
        <AppInput
          disabled
          placeholder="Enter text"
        />
        <div>AppTextarea:</div>
        <AppTextarea
          disabled
          placeholder="Enter text"
        />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AppInput from '@/uikit/app-input.vue';
import AppTextarea from '@/uikit/app-textarea.vue';

const inputValue = ref('');
const textareaValue = ref('');
</script>
