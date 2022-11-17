import {InMemoryClientGateway} from '~/src/adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { addClient } from '~/src/coreLogic/usecases/client-adding/addClient';
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('add client', () => {
  let clientStore: any
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    clientStore = useClientStore()
    clientGateway = new InMemoryClientGateway()
  })
  describe('The client email is not good', () => {
    it('should not add a client', async () => {
      const vincent: Client = {id: 'abc123', name: 'Vincent', email: 'plop'}
      addClient(vincent)
      expect(clientStore.all).toEqual([])
    })
  })
  describe('The client email is good', () => {
    it('should add a client',() => {
      const vincent: Client = {id: 'abc123', name: 'Vincent', email: 'vincent@good.com'}
      addClient(vincent)
      expect(clientStore.all).toEqual([vincent])
    })
  })
})