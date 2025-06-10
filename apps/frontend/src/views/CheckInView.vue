<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import MyInput from "@/components/ui/MyInput.vue";
import MyButton from "@/components/ui/MyButton.vue";

const route = useRoute();
const token = route.params.token;

const name = ref('');
const phone = ref('');
const message = ref('');

const checkIn = async () => {
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
  <div class="p-4 max-w-md mx-auto bg-white rounded shadow">
    <h2 class="text-xl font-semibold mb-4">Подтвердите бронирование</h2>
    <my-input v-model="name" placeholder="Имя" />
    <my-input v-model="phone" placeholder="Телефон"/>
    <my-button @click="checkIn">Подтвердить</my-button>
    <p class="mt-4 text-center">{{ message }}</p>
  </div>
</template>
