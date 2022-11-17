import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export interface ClientGateway {
  listAll(): Promise<Array<Client>>
  updateClient(client: any): Promise<Array<any>>
  add(client: Client): Promise<void>
}