import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { useClientStore } from '~/src/store/clients'
import { Client } from '../client-listing/client'

export const UpdateClient = async (clientGateway: ClientGateway, uclient:Client) => {
    const clients = useClientStore()
    clients.updateClient(uclient)
    await clientGateway.updateClient(uclient)
}
