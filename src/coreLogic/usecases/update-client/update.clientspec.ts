import {InMemoryClientGateway} from '../../../adapters/secondary/InMemoryClientGateway';
import { UpdateClient } from '~/src/coreLogic/usecases/update-client/updateclient';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia';
import { listClients } from '../client-listing/listClients';

describe('update client', () => {
    let clientGateway: InMemoryClientGateway
    let ClientStore: any
    beforeEach(() => {
        setActivePinia(createPinia())
        clientGateway = new InMemoryClientGateway()
        ClientStore = useClientStore()
        ClientStore.items = [{id: 'abc123', name: 'Vincent', email: 'xaxa@gmail.com'}]
    })

    it('should update a client / Store expect', async () => {
        await UpdateClient(clientGateway,{ id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'})
        expect(ClientStore.all).toEqual([{ id: 'abc123', name: 'Antoine', email: 'xaxa@gmail.com'}])
    })
    it('should update a client / Gateway expect', async () => {
        const res = await UpdateClient(clientGateway,{ id: 'abc123', name: 'Ruben', email: 'xaxa@gmail.com'})
        expect(res).toEqual([{ id: 'abc123', name: 'Ruben', email: 'xaxa@gmail.com'}])
    })
})