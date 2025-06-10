<script setup lang="ts">
const model = defineModel()
const props = defineProps({
  placeholder: { type: String, default: '' },
})
</script>

<template>
  <input
      v-model="model"
      :placeholder="props.placeholder"
      class="border-1 rounded-2xl p-2 mb-5 w-full"
  >
</template>