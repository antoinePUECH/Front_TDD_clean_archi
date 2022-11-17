import { useClientStore } from '~/src/store/clients'
import { Client } from "~/src/coreLogic/usecases/client-listing/client";

export const addClient = (newClient: Client) => {
  const clientStore = useClientStore()
  if (newClient.email.includes('@')) {
    clientStore.addClient(newClient)
  }
  return `Email ${newClient.email} is not valid`
}