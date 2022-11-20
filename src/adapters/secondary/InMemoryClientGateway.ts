import { ClientGateway } from "~/src/coreLogic/gateways/ClientGateway";
import { Client } from "~/src/coreLogic/usecases/client-listing/client";


export class InMemoryClientGateway implements ClientGateway {
  protected clients: Array<Client> = []


  updateClient(client: Client): Promise<void> {
    const index = this.clients.findIndex((clients) => clients.id === client.id)
    if(index !== -1){
      this.clients[index] = client
    }
    return Promise.resolve()
  }
  listAll(): Promise<Array<Client>> {
    return Promise.resolve(this.clients)
  }
  feedWith(...clients: Array<Client>) {
    let availableClients: Array<Client> = []
    clients.forEach(function (client) {
      if (client.email.includes('@')) {
        availableClients.push(client)
      }
    })
    this.clients = availableClients
  }
  add(client: Client): Promise<void> {
    this.clients.push(client)
    return Promise.resolve()
  }
  delete(client: Client): Promise<void> {
    const index = this.clients.findIndex((clients) => clients.id === client.id)
    if (index > -1)  this.clients.splice(index, 1)
    return Promise.resolve()
  }
  searchClient(client: Client): Promise<void> {
    this.clients = this.clients.filter((item) => item.id === client.id)
    return Promise.resolve()
  }
}