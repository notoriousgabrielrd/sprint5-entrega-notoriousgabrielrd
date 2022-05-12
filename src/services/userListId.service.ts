import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListId = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const especifiedUser = users.find((user) => user.id === id);

  return especifiedUser;
};

export default userListId;
