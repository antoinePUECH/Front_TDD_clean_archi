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
    },
    deleteDocument(document: Document) {
      const index = this.items.findIndex((item) => item.id === document.id)
      if (index > -1)
        this.items.splice(index, 1)
    }
  }
})