<script setup lang="ts">

import {computed, onErrorCaptured, ref} from "vue";

const error = ref<Error | null>(null);

onErrorCaptured((err, instance, info) => {
  error.value = err;
  console.error('Ошибка перехвачена ErrorBoundary:', err, instance, info);

  return false;
})

function clearError() {
  error.value = null;
}

const slotProps = computed(() => {
  if (!error.value) return {};
  return { error, clearError };
});

const slotName = computed(() => (error.value ? "error" : "default"));
</script>

<template>
  <template v-if="error">
    <div class="error-fallback">
      <h2>Что-то пошло не так!</h2>
      <p>{{ error.message }}</p>
      <button @click="clearError">Попробовать снова</button>
    </div>
  </template>
  <template v-else>
    <slot :name="slotName" v-bind="slotProps"></slot>
  </template>
</template>

<style scoped>
.error-fallback {
  padding: 20px;
  border: 1px solid red;
  background-color: #ffeaea;
  color: red;
  text-align: center;
  margin: 20px;
}
</style>