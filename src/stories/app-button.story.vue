<template>
  <Story
    id="AppButton"
    responsive-disabled
    title="AppButton"
    :layout="{ type: 'grid' }"
  >
    <Variant title="primary">
      <div class="p-8">
        <app-button style-strategy="primary">Primary</app-button>
      </div>
    </Variant>
    <Variant title="danger">
      <div class="p-8">
        <app-button style-strategy="danger">Danger</app-button>
      </div>
    </Variant>
    <Variant title="neutral">
      <div class="p-8">
        <app-button style-strategy="neutral">Neutral</app-button>
      </div>
    </Variant>
    <Variant title="confirm">
      <div class="p-8">
        <app-button style-strategy="confirm">Confirm</app-button>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import AppButton from '@/uikit/app-button.vue';
</script>
