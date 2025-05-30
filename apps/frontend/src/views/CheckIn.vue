<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const tableId = route.params.tableId;

const name = ref('');
const phone = ref('');
const message = ref('');

const checkIn = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/checkIn', {
      bookingId: tableId,
      name: name.value,
      phone: phone.value,
    });

    message.value = 'Бронирование подтверждено!';
  } catch (error) {
    message.value = 'Ошибка подтверждения. Проверьте данные.';
  }
};
</script>

<template>
  <div class="p-4 max-w-md mx-auto bg-white rounded shadow">
    <h2 class="text-xl font-semibold mb-4">Подтвердите бронирование</h2>
    <input v-model="name" placeholder="Имя" class="input mb-2 w-full" />
    <input v-model="phone" placeholder="Телефон" class="input mb-2 w-full" />
    <button @click="checkIn" class="btn btn-primary w-full">Подтвердить</button>
    <p class="mt-4 text-center">{{ message }}</p>
  </div>
</template>

<style scoped>
.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  background-color: #f49b33;
  color: white;
  padding: 0.6rem;
  border-radius: 6px;
}
</style>
