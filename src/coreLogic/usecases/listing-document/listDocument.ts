import { useDocumentStore } from "~/src/store/document"
import { DocumentGateway } from "../../gateways/DocumentGateway"

export const listDocuments = async (DocumentGateway: DocumentGateway) => {
  const Documentstore = useDocumentStore()
  Documentstore.startListing()
  const document = await DocumentGateway.listAll()
  Documentstore.list(document)
}