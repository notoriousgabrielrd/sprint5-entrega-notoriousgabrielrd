import { IUser } from "../interfaces/user";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt, { hashSync } from "bcrypt";

const userCreateService = async ({ name, email, password, age }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already Exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.age = age;
  user.password = bcrypt.hashSync(password, 10);

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
