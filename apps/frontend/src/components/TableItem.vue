<script setup lang="ts">
import busyImage from "@/assets/tableBusy.png";
import freeImage from "@/assets/tableFree.png";
import {useModalStore} from "@/stores/modal.ts";
import type {Table} from "@/types/Table.ts";

const modal = useModalStore()
async function handleTableClick(table: Table) {
  if (table.isOccupied) return;

  const result = await modal.open('bookTable', {
    tableId: table.id,
    tableNumber: table.number,
  });

  if (result?.success) {
    table.isOccupied = true;
  }
}

const props = defineProps({
  getTables: {
    type: Array as () => Table[],
    required: true,
  },
  loading: {
    type: Boolean,
  }
})
</script>

<template>
  <div class="flex justify-center">
    <div v-if="props.loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
      <div
          v-for="table in props.getTables"
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
        <div data-test="tableItem" >Стол №{{ table.number }}</div>
        <div class="text-sm text-gray-600">{{ table.isOccupied ? 'Занят' : 'Свободен' }}</div>
      </div>
    </div>
    <div v-else>
      <h1>Сервер не работает</h1>
    </div>
  </div>
</template>
