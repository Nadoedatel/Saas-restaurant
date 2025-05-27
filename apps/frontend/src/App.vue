<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import ModalManager from './components/ModalManager.vue';
</script>

<template>
  <Header></Header>
  <main class="flex justify-center p-5">
      <RouterView />
  </main>
 <ModalManager />
</template>
