import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { useClientStore } from '~/src/store/clients'

export const listClients = async (clientGateway: ClientGateway) => {
  const clientStore = useClientStore()
  clientStore.startListing()
  const clients = await clientGateway.listAll()
  clientStore.list(clients)
}
