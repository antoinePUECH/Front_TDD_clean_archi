import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { useClientStore } from '~/src/store/clients'
import { Client } from '../client-listing/client'

export const UpdateClient = async (clientGateway: ClientGateway, uclient:Client) => {
    const clients = useClientStore()
    await clientGateway.updateClient(uclient)
    clients.updateClient(uclient)
}
    
