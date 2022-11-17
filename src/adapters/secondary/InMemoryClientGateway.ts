import { ClientGateway} from "~/src/coreLogic/gateways/ClientGateway";
import { Client } from "~/src/coreLogic/usecases/client-listing/client";

export class InMemoryProductGateway implements ClientGateway {
  protected clients: Array<Client> = []

  listAll(): Promise<Array<Client>> {
    return Promise.resolve(this.clients)
  }
  feedWith(...products: Array<Client>) {
    this.clients = products
  }
}