<script setup lang="ts">
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()
const tableId = modal.payload?.tableId ?? '—'

const name = ref('')
const phone = ref('')
const time = ref('')

// Фейковое бронирование
function submit() {
  if (!name.value || !phone.value || !time.value) {
    alert('Заполните все поля')
    return
  }

  modal.close({ success: true, name: name.value, phone: phone.value, time: time.value })
}
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Бронирование столика №{{ tableId }}</h2>
    <form @submit.prevent="submit">
      <input v-model="name" placeholder="Имя" class="w-full p-2 border rounded" />
      <input v-model="phone" placeholder="Телефон" class="w-full p-2 border rounded" />
      <input v-model="time" type="time" class="w-full p-2 border rounded" />
      <button class="bg-blue-600 text-white py-2 px-4 rounded w-full mt-4">Забронировать</button>
    </form>
  </div>
</template>
