import { defineStore } from 'pinia'
import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export const useClientStore = defineStore('ClientStore', {
  state: () => {
    return {
      items: [] as Array<Client>,
      isLoading: false
    }
  },
  getters: {
    all: (state) => state.items
  },
  actions: {
    list(products: Array<Client>) {
      this.items = products
      this.isLoading = false
    },
    startListing() {
      this.isLoading = true
    },
    addClient(client: Client) {
      this.items.push(client)
    }
  }
})
