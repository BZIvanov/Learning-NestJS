import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  getClients() {
    return ['ClientA', 'ClientB', 'ClientC'];
  }
}
