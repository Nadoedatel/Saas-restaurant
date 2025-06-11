<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import HeaderMenu from './components/layout/header-menu.vue'
import ModalManager from './components/ModalManager.vue';
import {computed} from "vue";

const route = useRoute();

const shouldHideHeader = computed(() => {
  return route.path.startsWith('/qr');
});
</script>

<template>
  <HeaderMenu v-if="!shouldHideHeader" />
  <main class="flex justify-center p-5">
      <RouterView />
  </main>
 <ModalManager />
</template>
