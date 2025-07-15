<template>
  <Story
    id="AppAlert"
    responsive-disabled
    title="AppAlert"
    :layout="{ type: 'grid', width: '50%' }"
  >
    <Variant title="primary">
      <app-alert visible />
    </Variant>
    <Variant title="danger">
      <app-alert
        visible
        style-strategy="danger"
      />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import AppAlert from '@/uikit/app-alert.vue';
</script>
