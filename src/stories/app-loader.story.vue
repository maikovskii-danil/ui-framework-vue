<template>
  <Story
    id="AppLoader"
    responsive-disabled
    title="AppLoader"
    :layout="{ type: 'grid', width: '80%' }"
  >
    <Variant title="AppLoader">
      <AppLoader />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import AppLoader from '@/uikit/app-loader.vue';
</script>
