import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";


interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

export class ConnectionsService {
  private connectionsRepostitory: Repository<Connection>

  constructor(){
    this.connectionsRepostitory = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepostitory.create(
      { socket_id, user_id, admin_id, id }
    );

    await this.connectionsRepostitory.save(connection);

    return connection;
  };
}
