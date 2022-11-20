import { useDocumentStore } from '~/src/store/document'
import { Document } from "~/src/coreLogic/usecases/listing-document/Document";
import {DocumentGateway} from "~/src/coreLogic/gateways/DocumentGateway";

export const addDocument = async (newDocument: Document, documentGateway: DocumentGateway) => {
  const documentStore = useDocumentStore()
  await documentGateway.add(newDocument)
  documentStore.addDocument(newDocument)
}