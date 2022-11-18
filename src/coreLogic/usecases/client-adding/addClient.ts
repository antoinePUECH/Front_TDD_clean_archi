import { useClientStore } from '~/src/store/clients'
import { Client } from "~/src/coreLogic/usecases/client-listing/client";
import {ClientGateway} from "~/src/coreLogic/gateways/ClientGateway";

export const addClient = async (newClient: Client, clientGateway: ClientGateway) => {
  const clientStore = useClientStore()
  if (newClient.email.includes('@')) {
    await clientGateway.add(newClient)
    clientStore.addClient(newClient)
  }
  return `Email ${newClient.email} is not valid`
}