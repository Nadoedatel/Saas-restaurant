<!-- src/components/ui/BaseModal.vue -->
<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center"
    @click.self="close"
  >
     <div
      class="absolute inset-0 bg-black/30 backdrop-blur-sm"
      @click="close"
    />

    <!-- Контейнер самой модалки -->
    <div class="relative z-10 bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  close: () => void
}>()
</script>
