import { useClientStore } from '~/src/store/clients'
import { Client } from "~/src/coreLogic/usecases/client-listing/client";
import { ClientGateway } from "~/src/coreLogic/gateways/ClientGateway";

export const deleteClient = async (client: Client, clientGateway: ClientGateway) => {
  const clientStore = useClientStore()
  await clientGateway.delete(client)
  clientStore.deleteClient(client)
}