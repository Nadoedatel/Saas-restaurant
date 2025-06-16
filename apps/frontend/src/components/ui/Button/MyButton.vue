<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: "Btn" },
})
</script>

<template>
  <button
          class="border-1 rounded-2xl p-2 bg-amber-300 hover:bg-amber-500">{{ props.label }}
  </button>
</template>
