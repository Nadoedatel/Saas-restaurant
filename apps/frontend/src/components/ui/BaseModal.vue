<!-- src/components/ui/BaseModal.vue -->
<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="close"
  >
    <div class="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
      <button
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        @click="close"
      >
        ✕
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  close: () => void
}>()
</script>
