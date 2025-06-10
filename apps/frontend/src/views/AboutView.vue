<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";

interface MediaMetaDate {
  url: string;
  format: string;
  height: number;
  width: number;
}

interface Media {
  type: 'image' | 'video';
  subtype: 'photo';
  caption: string;
  copyright: string;
  'media-metadata': MediaMetaDate[];
}

const key = 'Dice4J9RmneDUcys6LHEe2ul7YGPmptD'
const nameArticle = ref("")


function receivingNews() {
  try {
    const test = axios(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${key}`)
        .then(res => res.data)
        .then(res => console.log(res))
  } catch(err) {
    console.error(err)
  }finally {
    console.log("Completely")
  }
}

onMounted(() => {receivingNews()})
</script>

<template>
  <div class="flex flex-col p-4">
    <p>Информация о нас!</p>
    <div>
        Статью предоставила: {{ nameArticle }}
    </div>
  </div>
</template>
