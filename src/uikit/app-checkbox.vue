<template>
  <label :class="{ 'cursor-default': disabled, 'cursor-pointer': !disabled }">
    <input
      v-model="model"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      type="checkbox"
      class="appearance-none absolute"
      :="$attrs"
    />
    <div class="flex items-center gap-4">
      <div
        :class="[
          'w-8 h-8',
          'bg-blue-300 dark:bg-blue-900',
          'border-[1px]! rounded',
          'border-blue-500! dark:border-blue-700!',
          'before:content-[\'\'] before:block',
          'before:w-5 before:h-5 before:rounded-[2px]',
          'flex items-center justify-center',
          modelValue && 'before:bg-blue-600',
          disabled
            && 'dark:border-gray-600! dark:bg-gray-800 opacity-70 cursor-not-allowed',
        ]"
      ></div>
      <div><slot /></div>
    </div>
  </label>
</template>

<script setup lang="ts">
const model = defineModel<boolean>();
const { disabled, modelValue } = defineProps<{
  disabled: boolean;
  modelValue?: string;
}>();
defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>
