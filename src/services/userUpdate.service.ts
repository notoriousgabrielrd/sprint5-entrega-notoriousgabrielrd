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
    email: email || accountToUpdate.email,
    name: name || accountToUpdate.name,
    password: password
      ? bcrypt.hashSync(password, 10)
      : accountToUpdate.password,
    age: age || accountToUpdate.age,
    updated_at: new Date(),
  };

  await userRepository.update(accountToUpdate!.id, userUpdated);

  return userUpdated;
};

export default userUpdateService;
