import { defineStore } from 'pinia'

export const useClientStore = defineStore('ClientStore', {
  state: () => {
    return {
      items: [] as Array<string>,
    }
  }
})
