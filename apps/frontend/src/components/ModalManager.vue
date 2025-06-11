<script setup lang="ts">
// Импортируем необходимые функции из Vue
import {type Component, computed} from 'vue'
// Импортируем хранилище модальных окон
import { useModalStore } from '@/stores/modal'
// Базовый компонент модального окна (обёртка)
import BaseModal from '@/components/ui/BaseModal.vue'

// Импортируем компоненты конкретных модальных окон
import BookTableModal from '@/modals/BookTableModal.vue'


// Словарь (мапа) для связи названий модалок с их компонентами
const MODAL_COMPONENTS: Record<string, Component> = {
  bookTable: BookTableModal,
}

// Получаем экземпляр хранилища модальных окон
const modal = useModalStore()

// Вычисляемое свойство для текущего открытого модального окна
const current = computed(() => modal.current)

// Вычисляемое свойство для компонента текущего модального окна
const modalComponent = computed(() => {
  if (!modal.current) return null // Если модалка не открыта - возвращаем null
  return MODAL_COMPONENTS[modal.current] // Иначе возвращаем соответствующий компонент
})

// Функция закрытия модального окна
const close = () => modal.close()
</script>

<template>
  <!-- 
    Базовый компонент модального окна (обёртка) 
    Рендерится только если есть текущее модальное окно и его компонент
  -->
  <BaseModal v-if="current && modalComponent" :close="close">
    <!-- 
      Динамический компонент, который отображает текущее модальное окно 
      :is - определяет какой компонент будет отрендерен
    -->
    <component :is="modalComponent" />
  </BaseModal>
</template>