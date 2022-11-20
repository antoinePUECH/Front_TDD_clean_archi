import { InMemoryDocumentGateway } from "~/src/adapters/secondary/InMemoryDocumentGateway";
import { Document } from "~/src/coreLogic/usecases/listing-document/Document";
import { useDocumentStore } from "~/src/store/document";
import { addDocument } from "~/src/coreLogic/usecases/adding-document/addDocument";
import { createPinia, setActivePinia } from "pinia";

describe("add document", () => {
  let documentStore: any;
  let documentGateway: InMemoryDocumentGateway;
  beforeEach(() => {
    setActivePinia(createPinia());
    documentStore = useDocumentStore();
    documentGateway = new InMemoryDocumentGateway();
  });
  describe("The document is good", () => {
    it("should add a document", async () => {
      const document: Document = {
        id: "doc23",
        name: "ledoc",
        type: "devis",
        clientId: "abc123",
        description: "plopplopplop"
      };
      await addDocument(document, documentGateway);
      expect(documentStore.all).toEqual([document]);
      expect(await documentGateway.listAll()).toEqual([document]);
    });
  });
});