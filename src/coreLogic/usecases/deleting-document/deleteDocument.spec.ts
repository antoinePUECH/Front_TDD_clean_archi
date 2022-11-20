import {InMemoryDocumentGateway} from "~/src/adapters/secondary/InMemoryDocumentGateway";
import {Document} from "~/src/coreLogic/usecases/listing-document/Document";
import {deleteDocument} from "~/src/coreLogic/usecases/deleting-document/deleteDocument";
import {createPinia, setActivePinia} from "pinia";
import {useDocumentStore} from "~/src/store/document";

describe("delete document", () => {
  let documentStore: any;
  let documentGateway: InMemoryDocumentGateway;
  beforeEach(() => {
    setActivePinia(createPinia());
    documentStore = useDocumentStore();
    documentGateway = new InMemoryDocumentGateway();
  });
  describe("The document exist", () => {
    it("should delete a document", async () => {
      const document: Document = {
        id: "doc23",
        name: "ledoc",
        type: "devis",
        clientId: "abc123",
        description: "plopplopplop"
      };
      documentGateway.feedWith(document);
      documentStore.addDocument(document);
      await deleteDocument(document, documentGateway);
      expect(documentStore.all).toEqual([]);
      expect(await documentGateway.listAll()).toEqual([]);
    })
  })
  describe("The document does not exist", () => {
    it("should not delete a document", async () => {
      const document: Document = {
        id: "doc23",
        name: "ledoc",
        type: "devis",
        clientId: "abc123",
        description: "plopplopplop"
      };
      const wrongDocument: Document = {
        id: "doc24",
        name: "ledoc",
        type: "devis",
        clientId: "abc123",
        description: "plopplopplop"
      };
      documentGateway.feedWith(document);
      documentStore.addDocument(document);
      await deleteDocument(wrongDocument, documentGateway);
      expect(documentStore.all).toEqual([document]);
      expect(await documentGateway.listAll()).toEqual([document]);
    })
  })
})