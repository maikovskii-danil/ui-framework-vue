<template>
  <Story
    responsive-disabled
    id="AppAlert"
    title="AppAlert"
  >
    <Variant title="primary">
      <div class="p-8">
        <app-alert visible />
      </div>
      <div class="p-8 w-200">
        <app-alert visible />
      </div>
    </Variant>
    <Variant title="danger">
      <div class="p-8">
        <app-alert
          visible
          style-strategy="danger"
        />
      </div>
      <div class="p-8 w-200">
        <app-alert
          visible
          style-strategy="danger"
        />
      </div>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import AppAlert from './app-alert.vue';
</script>
