import {InMemoryClientGateway} from '../../../adapters/secondary/InMemoryClientGateway';
import { useClientStore } from '~/src/store/clients';
import { createPinia, setActivePinia } from 'pinia'
import { listProducts } from '~/src/coreLogic/usecases/client-listing/listClients';
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
      await listProducts(clientGateway)
      expect(clientStore.all).toEqual([])
    })
  })
  describe('There is available clients', () => {
    it('should list all products', async () => {
      const guitare: Client = { id: 'abc123', name: 'Vincent', email: 'xxxx@gmail.Com' }
      const basse: Client = { id: 'def456', name: 'Antoine', email: 'akaxa@gmail.com' }
      clientGateway.feedWith(guitare, basse)
      await listProducts(clientGateway)
      expect(clientStore.all).toEqual([guitare, basse])
    })
  })
  describe('Loading', () => {
    it('should be aware during loading', async () => {
      const unsubscribe = clientStore.$subscribe((mutation: any, state: any) => {
        expect(state.isLoading).toBeTruthy()
        unsubscribe()
      })
      await listProducts(clientGateway)
    })
    it('should finish loading when done', async () => {
      await listProducts(clientGateway)
      expect(clientStore.isLoading).toBeFalsy()
    })
  })
})