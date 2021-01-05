import { UserRegisterDTO } from '../entities/UserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

export class UserController {
  constructor(private userRepository: IUserRepository) {}
  createUser(user: UserRegisterDTO): void {
    this.userRepository.createUser(user);
  }
}
