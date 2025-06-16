<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import HeaderMenu from './components/layout/header-menu.vue'
import ModalManager from './components/ModalManager.vue';
import {computed} from "vue";
import ErrorBoundary from "@/components/ui/ErrorBoundary/ErrorBoundary.vue";
import ErrorTrigger from "@/components/ErrorTrigger.vue";

const route = useRoute();

const shouldHideHeader = computed(() => {
  return route.path.startsWith('/qr');
});
</script>

<template>
   <ErrorBoundary>
     <HeaderMenu v-if="!shouldHideHeader" />
       <main class="flex flex-col items-center justify-center p-5">
         <RouterView />
         <ErrorTrigger />
       </main>
     <ModalManager />
   </ErrorBoundary>
</template>
