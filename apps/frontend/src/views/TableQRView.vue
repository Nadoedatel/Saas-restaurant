<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const tableId = route.params.tableId

const name = ref('');
const qrCode = ref('');

const checkQr = async () => {
  try {
    console.log(tableId)
    const getToken = await axios.get(`http://localhost:3000/api/tables/${ tableId }`)
    console.log(getToken.data.token)
    const getQr = await axios.get(`http://localhost:3000/api/bookings/${ getToken.data.token }`)
    console.log(getQr)
    const dataInfoUser = await getQr.data
    name.value = dataInfoUser.name
    qrCode.value = dataInfoUser.linkQr
    console.log(qrCode.value)
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
        <img :src="qrCode">
    </div>
</template>