<template>
  <Story
    id="AppModal"
    responsive-disabled
    title="AppModal"
  >
    <Variant title="AppModal">
      <div
        v-show="!visible"
        class="p-8"
      >
        <AppButton @click="visible = true">Open</AppButton>
      </div>
      <AppModal
        :visible
        @close="visible = false"
      >
        <template #default>
          <div class="p-8 w-250 h-300 bg-white rounded-2xl">modal</div>
        </template>
      </AppModal>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AppButton from '../app-button/app-button.vue';
import AppModal from './app-modal.vue';

const visible = ref(true);
</script>
