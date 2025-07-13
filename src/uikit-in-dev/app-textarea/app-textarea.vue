<template>
  <textarea
    ref="textarea"
    v-bind="$attrs"
    :class="[
      'w-full overflow-hidden resize-none rounded-md border p-2 outline-none transition',
      'focus:ring-2 focus:ring-blue-500',
      'bg-white text-black dark:bg-zinc-900 dark:text-white',
      error && 'border-red-500',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :disabled="disabled"
    :placeholder="placeholder"
    v-model="modelValue"
    @input="resize"
  />
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

const props = defineProps<{
  modelValue: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const textarea = ref<HTMLTextAreaElement | null>(null);

function resize() {
  if (!textarea.value) return;
  textarea.value.style.height = 'auto';
  textarea.value.style.height = textarea.value.scrollHeight + 'px';
}

watch(
  () => props.modelValue,
  () => nextTick(resize),
);
/*
export const AppTextarea: DefineComponent<
    {
      modelValue: string;
      disabled?: boolean;
      error?: boolean;
      placeholder?: string;
    },
    any,
    any,
    any,
    any,
    any,
    {
      'update:modelValue': (value: string) => void;
    }
  >;
*/
</script>
