<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const token = route.params.token;

const name = ref('');
const phone = ref('');
const message = ref('');

const checkQr = async () => {
  try {
    console.log(token)
    const response = await axios.post('http://localhost:3000/api/checkIn', {
      bookingId: token,
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
    <div>
        qr-code
        <button @click="checkIn" class="btn btn-primary w-full">Подтвердить</button>
    </div>
</template>