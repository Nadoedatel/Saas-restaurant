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

interface articleResult {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  'media' : Media[];
  eta_id: number;
}

interface NewYorkTimesApiResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: articleResult[];
}

const key = 'Dice4J9RmneDUcys6LHEe2ul7YGPmptD'
const nameArticle = ref("")


async function receivingNews(): Promise<articleResult[]> {
  const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${key}`

  try {
    const response = await axios.get<NewYorkTimesApiResponse>(apiUrl)

    const apiData = response.data

    if (apiData.status === 'OK') {
      console.log("Данные успешно получены!");
      console.log(apiData);
      return apiData.results;
    } else {
      console.warn("API вернуло статус не 'OK' или нет результатов.");
      return [];
    }

  } catch(error) {
    if (axios.isAxiosError(error)) {
      console.error(`Ошибка при запросе к API: ${error.message}`);
      if (error.response) {
        // Сервер ответил со статусом, отличным от 2xx
        console.error(`Статус ответа: ${error.response.status}`);
        console.error(`Данные ответа:`, error.response.data);
      } else if (error.request) {
        // Запрос был сделан, но ответа не получено
        console.error("Запрос был сделан, но ответа не получено.");
      } else {
        // Что-то пошло не так при настройке запроса
        console.error("Ошибка при настройке запроса:", error.message);
      }
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    return [];
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
