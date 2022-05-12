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

  const newPassword = bcrypt.hashSync(password, 10);

  const userUpdated = {
    email,
    name,
    password: newPassword,
    age,
    updated_at: Date(),
  };
  console.log(accountToUpdate);

  await userRepository.update(accountToUpdate!.id, userUpdated);

  return true;
};

export default userUpdateService;
