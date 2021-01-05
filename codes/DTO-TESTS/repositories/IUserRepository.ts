import { IUser } from '../entities/IUser';
import { UserRegisterDTO } from '../entities/UserDTO';

export interface IUserRepository {
  createUser(user: UserRegisterDTO): Promise<void>;
  getUsers(): Promise<IUser[]>;
  getUserByUsername(username: string): Promise<IUser | null>;
}
