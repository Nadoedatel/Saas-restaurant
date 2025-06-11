<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import Header from './components/layout/Header.vue'
import ModalManager from './components/ModalManager.vue';
import {computed} from "vue";

const route = useRoute();

const shouldHideHeader = computed(() => {
  return route.path.startsWith('/qr');
});
</script>

<template>
  <Header v-if="!shouldHideHeader"></Header>
  <main class="flex justify-center p-5">
      <RouterView />
  </main>
 <ModalManager />
</template>
