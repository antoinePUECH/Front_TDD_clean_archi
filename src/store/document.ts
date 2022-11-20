import { defineStore } from 'pinia'
import { Document } from '~/src/coreLogic/usecases/listing-document/Document'

export const useDocumentStore = defineStore('DocumentStore', {
  state: () => {
    return {
      items: [] as Array<Document>,
      isLoading: false
    }
  },
  getters: {
    all: (state) => state.items
  },
  actions: {
    list(document: Array<Document>) {
      this.items = document
      this.isLoading = false
    },
    startListing() {
      this.isLoading = true
    }
  }
})