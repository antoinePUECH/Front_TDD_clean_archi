import {InMemoryDocumentGateway} from '../../../adapters/secondary/InMemoryDocumentGateway';
import { createPinia, setActivePinia } from 'pinia'
import {useDocumentStore} from '~/src/store/document';
import {listDocuments} from './listDocument';
import {Document} from './Document';

describe("list document", () => {
    let documentGateway: InMemoryDocumentGateway;
    let documentStore: any;
    beforeEach(() => {
        setActivePinia(createPinia());
        documentStore = useDocumentStore();
        documentGateway = new InMemoryDocumentGateway();
    });
    it("should list nothing if nothing in list", async () => {
        await listDocuments(documentGateway);
        expect(documentStore.all).toEqual([]);
        expect(await documentGateway.listAll()).toEqual([]);
    });
    it("should list all documents", async () => {
        const document1: Document = {
            id: "12xxa",
            name: "document1",
            type: "facture",
            description: "blablabla",
            clientId: "abc123"
        }
        documentStore.items.push(document1);
        documentGateway.feedWith(document1);
        expect(documentStore.all).toEqual([document1]);
        expect(await documentGateway.listAll()).toEqual([document1]);
    });

});