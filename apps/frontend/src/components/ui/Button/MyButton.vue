<script setup lang="ts">

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


const onClick = () => {
  emit('click', 1);
};
</script>

<template>
  <button type="button" @click="onClick" class="border-1 rounded-2xl p-2 bg-amber-300 hover:bg-amber-500">{{ label }}</button>
</template>
