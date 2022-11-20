import { defineStore } from 'pinia'
import { Document } from '~/src/coreLogic/usecases/listing-document/Document'

export const useDocumentStore = defineStore('DocumentStore', {
  state: () => {
    return {
      items: [] as Array<Document>
    }
  }
})