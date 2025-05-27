<!-- src/ModalManager.vue -->
<template>
  <BaseModal v-if="current && modalComponent" :close="close">
    <component :is="modalComponent" />
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import BaseModal from '@/components/ui/BaseModal.vue'

// Импортируем модалки
import BookTableModal from '@/modals/BookTableModal.vue'

// Типизируем ключи
type ModalName = 'bookTable'

// Мапа названий на компоненты
const MODAL_COMPONENTS: Record<ModalName, any> = {
  bookTable: BookTableModal,
}

const modal = useModalStore()

const current = computed(() => modal.current)

const modalComponent = computed(() => {
  if (!modal.current) return null
  return MODAL_COMPONENTS[modal.current]
})

const close = () => modal.close()
</script>
