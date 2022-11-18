import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export interface ClientGateway {
  listAll(): Promise<Array<Client>>
  updateClient(client: Client): Promise<void>
  searchClient(client: Client): Promise<void>
  add(client: Client): Promise<void>
  delete(client: Client): Promise<void>
}