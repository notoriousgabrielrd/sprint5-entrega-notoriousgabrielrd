import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListId = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const especifiedUser = users.find((user) => user.id === id);

  const userFound = {
    id: especifiedUser?.id,
    name: especifiedUser?.name,
    email: especifiedUser?.email,
    age: especifiedUser?.age,
    created_at: especifiedUser?.created_at,
    updated_at: especifiedUser?.updated_at,
  };

  return userFound;
};

export default userListId;
