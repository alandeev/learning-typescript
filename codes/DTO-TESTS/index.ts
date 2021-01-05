import { DataContext } from './data/DataContext';
import { User } from './entities/User';
import { UserRepository } from './repositories/UserRepository';

const dbContext = new DataContext();
const userRepository = new UserRepository(dbContext);

const user = new User('pedro', '1231111111111111', 19);
const user2 = new User('antonio', '123123', 23);

try {
  userRepository.createUser(user);
  const users = userRepository.getUsers();
  console.log(users);

  userRepository.createUser(user2);
  const users2 = userRepository.getUsers();
  console.log(users2);
} catch (err) {
  console.log({ error: err.message });
}
