import { ClientGateway } from "../../gateways/ClientGateway"
import { Client } from "../client-listing/client"
import { useClientStore } from '~/src/store/clients'

export const getClient = async (clientGateway: ClientGateway, sclient: Client) => {
    const clients = useClientStore()
    await clientGateway.searchClient(sclient)
    clients.getClient(sclient)
}