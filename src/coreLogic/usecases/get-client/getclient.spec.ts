import {InMemoryClientGateway} from '~/src/adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { getClient } from '~/src/coreLogic/usecases/get-client/getclient';
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('find client', () => {
    let clientGateway: InMemoryClientGateway
    let ClientStore: any
    beforeEach(() => {
        setActivePinia(createPinia())
        clientGateway = new InMemoryClientGateway()
        ClientStore = useClientStore()
    })
    it('should find a client', async () => {
        const perso : Client = { id: 'abc123', name: 'Vincent', email: 'xxaxa@gmail.com'}
        const perso2 : Client = { id: 'abc514', name: 'Antoine', email: 'awwa@gmail.com'}
        ClientStore.items = [perso,perso2]
        clientGateway.feedWith(perso,perso2)
        await getClient(clientGateway, perso)
        expect(ClientStore.all).toEqual([perso])
        expect(await clientGateway.listAll()).toEqual([{ id: 'abc123', name: 'Vincent', email: 'xxaxa@gmail.com'}])
    })
})