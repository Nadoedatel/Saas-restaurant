// Импортируем необходимые функции из библиотек
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Тип для названий модальных окон (пока только 'bookTable')
type ModalName = 'bookTable' | null

// Создаём хранилище с именем 'modal'
export const useModalStore = defineStore('modal', () => {
  // Текущее открытое модальное окно (или null если закрыто)
  const current = ref<ModalName>(null)
  
  // Данные, которые передаются в модальное окно
  const payload = ref<any>(null)
  
  // Функция-резолвер Promise, которая вызывается при закрытии модального окна
  const resolve = ref<((data: any) => void) | null>(null)

  // Функция открытия модального окна
  function open(name: Exclude<ModalName, null>, data?: any): Promise<any> {
    // Устанавливаем текущее модальное окно
    current.value = name
    // Сохраняем переданные данные
    payload.value = data ?? null

    // Возвращаем Promise, который резолвится при закрытии модального окна
    return new Promise((res) => {
      resolve.value = res
    })
  }

  // Функция закрытия модального окна
  function close(data?: any) {
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