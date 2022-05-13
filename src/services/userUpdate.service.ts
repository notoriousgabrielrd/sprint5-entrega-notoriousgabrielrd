import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt";

const userUpdateService = async (
  id: string,
  email: string,
  name: string,
  password: string,
  age: number
) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const accountToUpdate = users.find((users) => users.id === id);

  if (!accountToUpdate) {
    throw new Error("User not found.");
  }

  const userUpdated = {
    id: accountToUpdate.id,
    email: email || accountToUpdate.email,
    name: name || accountToUpdate.name,
    password: password
      ? bcrypt.hashSync(password, 10)
      : accountToUpdate.password,
    age: age || accountToUpdate.age,
    created_at: accountToUpdate.created_at,
    updated_at: new Date(),
  };

  await userRepository.update(accountToUpdate!.id, userUpdated);

  const objectReady = {
    id: userUpdated.id,
    name: userUpdated.name,
    email: userUpdated.email,
    age: userUpdated.age,
    created_at: userUpdated.created_at,
    updated_at: userUpdated.updated_at,
  };

  return objectReady;
};

export default userUpdateService;
