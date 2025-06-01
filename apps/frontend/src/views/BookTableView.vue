<script setup lang="ts">
import Rectangle30 from '@/assets/Rectangle30.png'
import freeImage from '@/assets/tableFree.png';
import busyImage from '@/assets/tableBusy.png';
import { onMounted, ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import axios from 'axios';
import router from '@/router';

const tables = ref([])
const modal = useModalStore()

// Когда пользователь кликает по столику
// async function handleTableClick(index: number) {
//   if (tables.value[index].isBusy) return

//   const result = await modal.open('bookTable', { tableId: index + 1 })
  
//   if (result?.success) {
//     tables.value[index].isBusy = true
//   }
// }


onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/tables')
  tables.value = res.data
  console.log(tables.value);
  
})

function selectTable(table: any) {
  router.push({ name: 'BookingModal', query: { tableNumber: table.number } })
}
</script>

<template>
  <div class="bg-white rounded-xl drop-shadow-xl p-2 text-center flex flex-col justify-center">
    <h1>Забронировать стол</h1>
    <hr class="my-4 border-[#F49B33] dark:bg-gray-700">
    <img :src="Rectangle30" alt="Интерьер ресторана" />
    <hr class="my-4 border-[#F49B33] dark:bg-gray-700">
    <h2>Выберите места:</h2>
    <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
      <div 
        v-for="(table, index) in tables" 
        :key="index"
        class="flex items-center justify-center p-5 bg-center bg-cover w-32 h-32 m-2 cursor-pointer"
        :style="{ backgroundImage: `url(${table.isBusy ? busyImage : freeImage})` }"
        @click="handleTableClick(index)"
      >
        Стол {{ index + 1 }}
      </div>
    </div> -->
    <div>
    <h2 class="text-xl font-bold mb-4">Выберите столик</h2>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="table in tables"
        :key="table.id"
        :class="[
          'p-4 rounded shadow text-center',
          table.isOccupied ? 'bg-red-200' : 'bg-green-200 cursor-pointer',
        ]"
        @click="!table.isOccupied && selectTable(table)"
      >
        Стол №{{ table.number }}<br />
        <span class="text-sm">{{ table.isOccupied ? "Занят" : "Свободен" }}</span>
      </div>
    </div>
  </div>
  </div>
</template>
