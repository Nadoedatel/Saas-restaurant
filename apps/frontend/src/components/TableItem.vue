<script setup lang="ts">
import busyImage from "@/assets/tableBusy.png";
import freeImage from "@/assets/tableFree.png";
import {useModalStore} from "@/stores/modal.ts";
import router from "@/router";

interface Table {
  id: number;
  number: number;
  isOccupied: boolean;
}

const modal = useModalStore()
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

function selectTable(table: any) {
  router.push({ name: 'bookTable', query: { tableNumber: table.number } })
}

const props = defineProps({
  tables: {
    type: Array as () => Table[],
    required: true,
  },
})
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
    <div
        v-for="table in props.tables"
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
</template>
