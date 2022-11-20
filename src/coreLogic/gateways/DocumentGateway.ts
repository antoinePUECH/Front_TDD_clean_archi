import { Document } from '../usecases/listing-document/Document'

export interface DocumentGateway {
  listAll(): Promise<Array<Document>>
  add(document: Document): Promise<void>
  delete(document: Document): Promise<void>
}