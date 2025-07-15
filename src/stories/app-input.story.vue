<template>
  <Story
    id="AppInput"
    responsive-disabled
    title="AppInput"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="default">
      <div class="p-8">
        <AppInput placeholder="Input text" />
      </div>
    </Variant>
    <Variant title="error">
      <div class="p-8">
        <AppInput
          placeholder="Input text"
          error="Error text"
        />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import AppInput from '@/uikit/app-input.vue';
</script>
