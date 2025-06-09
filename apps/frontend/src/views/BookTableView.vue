<script setup lang="ts">
import Rectangle30 from '@/assets/Rectangle30.png'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import TableItem from "@/components/TableItem.vue";

const tables = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/tables')
  tables.value = res.data
})
</script>

<template>
  <div class="bg-white rounded-xl drop-shadow-xl p-2 text-center flex flex-col justify-center">
    <h1 class="text-2xl font-semibold mb-2">Забронировать стол</h1>
    <hr class="my-4 border-[#F49B33]">

    <img :src="Rectangle30" alt="Интерьер ресторана" class="mx-auto mb-4"/>

    <hr class="my-4 border-[#F49B33]">
    <h2 class="text-lg font-medium mb-4">Выберите места:</h2>

    <table-item :tables/>
  </div>
</template>
