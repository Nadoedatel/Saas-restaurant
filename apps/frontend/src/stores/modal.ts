// stores/modal.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

type ModalName = 'bookTable' | null

export const useModalStore = defineStore('modal', () => {
  const current = ref<ModalName>(null)
  const payload = ref<any>(null)
  const resolve = ref<((data: any) => void) | null>(null)

  function open(name: Exclude<ModalName, null>, data?: any): Promise<any> {
    current.value = name
    payload.value = data ?? null

    return new Promise((res) => {
      resolve.value = res
    })
  }

  function close(data?: any) {
    if (resolve.value) resolve.value(data)
    current.value = null
    payload.value = null
    resolve.value = null
  }

  return {
    current,
    payload,
    open,
    close
  }
})
