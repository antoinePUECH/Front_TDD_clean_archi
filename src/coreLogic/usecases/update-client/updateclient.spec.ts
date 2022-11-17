import {InMemoryClientGateway} from '~/src/adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { UpdateClient } from '~/src/coreLogic/usecases/update-client/updateClient';
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('update client', () => {
    let clientGateway: InMemoryClientGateway
    let ClientStore: any
    beforeEach(() => {
        setActivePinia(createPinia())
        clientGateway = new InMemoryClientGateway()
        ClientStore = useClientStore()
    })
    it('should update a client', async () => {
        const perso : Client = { id: 'abc123', name: 'Vincent', email: 'xaxa@gmail.com'}
        ClientStore.items = [perso]
        clientGateway.feedWith(perso)
        const update: Client = { id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'}
        await UpdateClient(clientGateway,update)
        expect(ClientStore.all).toEqual([{ id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'}])
        expect(await clientGateway.listAll()).toEqual([{ id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'}])
    })
    it('if not found, should not update a client', async () => {
        const update: Client = { id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'}
        await UpdateClient(clientGateway,update)
        expect(ClientStore.all).toEqual([])
        expect(await clientGateway.listAll()).toEqual([])
    })
})