<script setup lang="ts">
import { ref } from 'vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()
const tableId = modal.payload?.tableId ?? '—'

const name = ref('')
const phone = ref('')
const date = ref('')
const time = ref('')

// Фейковое бронирование
async function submit() {
  if (!name.value || !phone.value || !date.value || !time.value) {
    alert('Заполните все поля')
    return
  }

  // Собираем дату и время в ISO формат
  const dateTime = new Date(`${date.value}T${time.value}:00.000Z`).toISOString()

  const res = await fetch('http://localhost:3000/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tableId,
      name: name.value,
      phone: phone.value,
      time: dateTime
    })
  })
  const data = await res.json()
  console.log(data);
  
  if (data.success) modal.close({ success: true })
}
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Бронирование столика №{{ tableId }}</h2>
    <form @submit.prevent="submit">
      <input v-model="name" placeholder="Имя" class="w-full p-2 border rounded mb-2" />
      <input v-model="phone" placeholder="Телефон" class="w-full p-2 border rounded mb-2" />
      
      <div class="flex gap-2">
        <input 
          v-model="date" 
          type="date" 
          class="w-full p-2 border rounded"
          :min="new Date().toISOString().split('T')[0]"
        />
        <input 
          v-model="time" 
          type="time" 
          class="w-full p-2 border rounded"
          min="10:00" 
          max="22:00"
        />
      </div>
      
      <button class="bg-blue-600 text-white py-2 px-4 rounded w-full mt-4">Забронировать</button>
    </form>
  </div>
</template>