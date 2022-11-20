import { useDocumentStore } from '~/src/store/document'
import { Document } from "~/src/coreLogic/usecases/listing-document/Document"
import {DocumentGateway} from "~/src/coreLogic/gateways/DocumentGateway"

export const deleteDocument = async (document: Document, documentGateway: DocumentGateway) => {
  const documentStore = useDocumentStore()
  await documentGateway.delete(document)
  documentStore.deleteDocument(document)
}