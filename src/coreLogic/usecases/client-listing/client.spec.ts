import {InMemoryClientGateway} from '../../../adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { listClients } from '~/src/coreLogic/usecases/client-listing/listClients';
import { Client } from '~/src/coreLogic/usecases/client-listing/client';

describe('list client', () => {
  let clientStore: any
  let clientGateway: InMemoryClientGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    clientStore = useClientStore()
    clientGateway = new InMemoryClientGateway()
  })
  describe('There is no available clients', () => {
    it('should list nothing', async () => {
      await listClients(clientGateway)
      expect(clientStore.all).toEqual([])
    })
  })
  describe('There is available clients', () => {
    it('should list all products', async () => {
      const vincent: Client = { id: 'abc123', name: 'Vincent', email: 'xxxx@gmail.Com' }
      const antoine: Client = { id: 'def456', name: 'Antoine', email: 'akaxa@gmail.com' }
      clientGateway.feedWith(vincent, antoine)
      await listClients(clientGateway)
      expect(clientStore.all).toEqual([vincent, antoine])
    })
  })
  describe('Loading', () => {
    it('should be aware during loading', async () => {
      const unsubscribe = clientStore.$subscribe((_mutation: any, state: any) => {
        expect(state.isLoading).toBeTruthy()
        unsubscribe()
      })
      await listClients(clientGateway)
    })
    it('should finish loading when done', async () => {
      await listClients(clientGateway)
      expect(clientStore.isLoading).toBeFalsy()
    })
  })
})