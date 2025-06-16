<script setup lang="ts">

import {computed} from "vue";

const props = withDefaults(
    defineProps<{
      label: string;
      primary?: boolean;
      size?: 'small';
      backgroundColor?: string;
    }>(),
    { primary: false }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const onClick = () => {
  emit('click', 1);
};
</script>

<template>
  <button type="button" :class="classes" @click="onClick" class="border-1 rounded-2xl p-2 bg-amber-300 hover:bg-amber-500">{{ label }}</button>
</template>
