import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();
  console.log(users);

  return users;
};

export default userListService;
