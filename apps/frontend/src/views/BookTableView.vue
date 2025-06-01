<script setup lang="ts">
import Rectangle30 from '@/assets/Rectangle30.png'
import freeImage from '@/assets/tableFree.png'
import busyImage from '@/assets/tableBusy.png'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useModalStore } from '@/stores/modal'

// Храним список всех столов
const tables = ref([])
const modal = useModalStore()

// Загружаем столы при загрузке компонента
onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/tables')
  tables.value = res.data
  console.log('Загружены столы:', tables.value)
})

async function handleTableClick(table: any) {
  if (table.isOccupied) return;

  const result = await modal.open('bookTable', {
    tableId: table.id,
    tableNumber: table.number,
  });

  if (result?.success) {
    table.isOccupied = true;
  }
}


// При клике на свободный стол — переходим на форму бронирования
function selectTable(table: any) {
  router.push({ name: 'bookTable', query: { tableNumber: table.number } })
}
</script>

<template>
  <div class="bg-white rounded-xl drop-shadow-xl p-2 text-center flex flex-col justify-center">
    <h1 class="text-2xl font-semibold mb-2">Забронировать стол</h1>
    <hr class="my-4 border-[#F49B33]">

    <!-- Картинка интерьера -->
    <img :src="Rectangle30" alt="Интерьер ресторана" class="mx-auto mb-4"/>

    <hr class="my-4 border-[#F49B33]">
    <h2 class="text-lg font-medium mb-4">Выберите места:</h2>

    <!-- Сетка столов -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
      <div
        v-for="table in tables"
        :key="table.id"
        class="flex flex-col items-center justify-center p-4 w-32 h-32 rounded-lg shadow"
        :class="table.isOccupied ? 'bg-red-200 cursor-not-allowed' : 'bg-green-200 hover:bg-green-300 cursor-pointer'"
        @click="handleTableClick(table)"
      >
        <img
          :src="table.isOccupied ? busyImage : freeImage"
          alt="Стол"
          class="w-16 h-16 mb-2"
        />
        <div>Стол №{{ table.number }}</div>
        <div class="text-sm text-gray-600">{{ table.isOccupied ? 'Занят' : 'Свободен' }}</div>
      </div>
    </div>
  </div>
</template>
