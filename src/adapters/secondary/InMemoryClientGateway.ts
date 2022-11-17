import { ClientGateway} from "~/src/coreLogic/gateways/ClientGateway";
import { Client } from "~/src/coreLogic/usecases/client-listing/client";

export class InMemoryClientGateway implements ClientGateway {
  protected clients: Array<Client> = []

  updateClient(client: any): Promise<Array<any>> {
    this.clients = this.clients.map((c) => {
      if (c.id === client.id) {
        return client
      }else{
        return c
      }

      })
    
    return Promise.resolve(this.clients)
    
  }
  listAll(): Promise<Array<Client>> {
    return Promise.resolve(this.clients)
  }
  feedWith(...clients: Array<Client>) {
    this.clients = clients
  }
}