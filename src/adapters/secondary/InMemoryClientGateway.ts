import { ClientGateway} from "~/src/coreLogic/gateways/ClientGateway";
import { Client } from "~/src/coreLogic/usecases/client-listing/client";

export class InMemoryClientGateway implements ClientGateway {
  protected clients: Array<Client> = []

  listAll(): Promise<Array<Client>> {
    return Promise.resolve(this.clients)
  }
  feedWith(...clients: Array<Client>) {
    this.clients = clients
  }
}