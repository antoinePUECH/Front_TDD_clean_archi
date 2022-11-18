import {InMemoryClientGateway} from '~/src/adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { deleteClient } from '~/src/coreLogic/usecases/client-deleting/deleteClient';
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('delete client', () => {
  let clientStore: any
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    clientStore = useClientStore()
    clientGateway = new InMemoryClientGateway()
  })
  describe('The client is deleted', () => {
    it('should delete a client', async () => {
      const vincent: Client = {id: 'abc123', name: 'Vincent', email: 'plop@plop.com'}
      clientGateway.feedWith(vincent)
      clientStore.addClient(vincent)
      await deleteClient(vincent, clientGateway)
      expect(clientStore.all).toEqual([])
      expect(await clientGateway.listAll()).toEqual([])
    })
  })
  describe('The client is not deleted', () => {
    it('should not delete a client if he dos not exist', async () => {
      const vincent: Client = {id: 'abc123', name: 'Vincent', email: 'plop@notdelete.com' }
      const wrongClient: Client = {id: 'bcgg55', name: 'plop', email: 'test@test.com' }
      clientGateway.feedWith(vincent)
      clientStore.addClient(vincent)
      await deleteClient(wrongClient, clientGateway)
      expect(clientStore.all).toEqual([vincent])
      expect(await clientGateway.listAll()).toEqual([vincent])
  })
})
})