import { IUser } from './IUser';

export class User implements IUser {
  private static id = 0;

  constructor(public username: string, public password: string, public age: number) {
    User.id = User.id + 1;
  }
}
