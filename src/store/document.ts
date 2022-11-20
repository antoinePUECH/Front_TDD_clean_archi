import { defineStore } from 'pinia'
import { Document } from '~/src/coreLogic/usecases/listing-document/Document'

export const useDocumentStore = defineStore('DocumentStore', {
  state: () => {
    return {
      items: [] as Array<Document>
    }
  },
  getters: {
    all: (state) => state.items
  },
  actions: {
    addDocument(document: Document) {
      this.items.push(document)
    }
  }
})