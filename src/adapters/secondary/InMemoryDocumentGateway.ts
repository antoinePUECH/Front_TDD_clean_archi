import { DocumentGateway } from "~/src/coreLogic/gateways/DocumentGateway";
import { Document } from "~/src/coreLogic/usecases/listing-document/Document";

export class InMemoryDocumentGateway implements DocumentGateway {
  protected documents: Array<Document> = []

  listAll(): Promise<Array<Document>> {
    return Promise.resolve(this.documents)
  }

  feedWith(...documents: Array<Document>) {
    this.documents = documents
  }

  add(document: Document): Promise<void> {
    this.documents.push(document)
    return Promise.resolve();
  }

  delete(document: Document): Promise<void> {
    return Promise.resolve(undefined);
  }
}