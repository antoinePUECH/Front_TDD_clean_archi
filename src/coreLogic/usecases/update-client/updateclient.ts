import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { useClientStore } from '~~/src/store/clients'


export const UpdateClient = async (clientGateway: ClientGateway, uclient:any) => {
    // store
    const clients = useClientStore()
    clients.startListing()
    clients.updateClient(uclient)

    //gateway
    await clientGateway.updateClient(uclient)
}
