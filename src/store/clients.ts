import { defineStore } from 'pinia'
import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export const useClientStore = defineStore('ClientStore', {
  state: () => {
    return {
      items: [] as Array<Client>,
      isLoading: false,
    }
  },
  getters: {
    all: (state) => state.items
  },
  actions: {
    list(clients: Array<Client>) {
      this.items = clients
      this.isLoading = false
    },
    startListing() {
      this.isLoading = true
    },
    getClient(client: Client) {
      this.items = this.items.filter((item) => item.id === client.id)
    },
    updateClient(client: Client) {
      const index = this.items.findIndex((item) => item.id === client.id)
      if(index !== -1)
        this.items[index] = client
    },
    addClient(client: Client) {
      this.items.push(client)
    },
    deleteClient(client: Client) {
      const index = this.items.findIndex((item) => item.id === client.id)
      if (index > -1)
        this.items.splice(index, 1)
    }
  }
})
