import { Client } from '~/src/coreLogic/usecases/client-listing/client'

export interface ClientGateway {
  listAll(): Promise<Array<Client>>
}