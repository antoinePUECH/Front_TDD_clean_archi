import { ClientGateway } from '~/src/coreLogic/gateways/ClientGateway'
import { useClientStore } from '~/src/store/clients'

export const listProducts = async (clientGateway: ClientGateway) => {
  const clientStore = useClientStore()
  clientStore.startListing()
  const products = await clientGateway.listAll()
  clientStore.list(products)
}
