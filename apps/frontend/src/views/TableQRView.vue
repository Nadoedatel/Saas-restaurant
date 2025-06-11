<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import {bookings, tables} from "@/constants/links/API.ts";

const route = useRoute();
const tableId = route.params.tableId

const name = ref('');
const qrCode = ref('');

const checkQr = async () => {
  try {

    const getToken = await axios.get(`${tables}${tableId}`)

    const getQr = await axios.get(`${bookings}${getToken.data.token}`)

    const dataInfoUser = await getQr.data

    name.value = dataInfoUser.name
    qrCode.value = dataInfoUser.linkQr

  } catch (error) {
    console.error(error)
  }
};

onMounted(() => {
  checkQr();
})
</script>

<template>
    <div>
      <div v-html="qrCode" class="w-screen h-screen flex items-center justify-center"></div>
    </div>
</template>