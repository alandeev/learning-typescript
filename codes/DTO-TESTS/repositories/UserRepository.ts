import { DataContext } from '../data/DataContext';
import { IUser } from '../entities/IUser';
import { UserRegisterDTO } from '../entities/UserDTO';
import { maxLength, minLength } from '../services/errors';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private db: DataContext) {}

  @minLength('username', 4, 'Você precisa por no minimo 4 caracteres')
  @maxLength('username', 10, 'Você precisa por no maximo 10 caracteres')
  @minLength('password', 6)
  @maxLength('password', 10)
  async createUser(user: UserRegisterDTO): Promise<void> {
    this.db.users.push(user);
  }
  async getUsers(): Promise<IUser[]> {
    return this.db.users;
  }
  async getUserByUsername(username: string): Promise<IUser | null> {
    return this.db.users.find((user: IUser) => user.username == username) || null;
  }
}
