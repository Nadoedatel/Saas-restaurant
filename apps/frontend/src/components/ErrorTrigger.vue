<script setup lang="ts">
import { onMounted } from 'vue';

const throwError = () => {
  throw new Error('Это тестовая ошибка из ErrorTrigger!');
};

// Ошибка при монтировании (сработает при первом рендере)
onMounted(() => {
  // throw new Error('Ошибка при монтировании компонента ErrorTrigger!');
});
</script>

<template>
  <div>
    <button @click="throwError">Вызвать ошибку</button>
  </div>
</template>
