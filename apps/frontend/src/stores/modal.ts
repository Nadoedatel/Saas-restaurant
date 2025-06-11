// Импортируем необходимые функции из библиотек
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {ModalName} from "@/types/ModalName.ts";
import type {ModalConfigs} from "@/types/ModalConfigs.ts";


// Создаём хранилище с именем 'modal'
export const useModalStore = defineStore('modal', () => {
  // Текущее открытое модальное окно (или null если закрыто)
  const current = ref<ModalName>(null)
  
  // Данные, которые передаются в модальное окно
  const payload = ref<unknown>(null)
  
  // Функция-резолвер Promise, которая вызывается при закрытии модального окна
  const resolve = ref<((data: unknown) => void) | null>(null)

  // Функция открытия модального окна
  function open<K extends Exclude<ModalName, null>>(
      name: K,
      data?: ModalConfigs[K]['payload']
  ): Promise<ModalConfigs[K]['result']> {
    // Устанавливаем текущее модальное окно
    current.value = name
    // Сохраняем переданные данные
    payload.value = data ?? null

    // Возвращаем Promise, который резолвится при закрытии модального окна
    return new Promise<ModalConfigs[K]['result']>((res) => {
      resolve.value = res as (data: unknown) => void
    })
  }

  // Функция закрытия модального окна
  function close(data?: unknown) {
    // Если есть резолвер - вызываем его с переданными данными
    if (resolve.value) resolve.value(data)
    // Сбрасываем состояние хранилища
    current.value = null
    payload.value = null
    resolve.value = null
  }

  // Экспортируем наружу состояние и методы
  return {
    current,  // Текущее модальное окно
    payload,  // Данные модального окна
    open,     // Метод открытия
    close     // Метод закрытия
  }
})