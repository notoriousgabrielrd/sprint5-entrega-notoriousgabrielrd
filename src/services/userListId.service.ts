import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListId = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  // interface teste {
  //   id: string;
  //   name: string;
  //   email: string;
  //   password: string;
  //   age: number;
  //   created_at: Date;
  //   updated_at: Date;
  // }

  let especifiedUser: any = users.find((user) => user.id === id);

  // const userFound = {
  //   id: especifiedUser?.id,
  //   name: especifiedUser?.name,
  //   email: especifiedUser?.email,
  //   age: especifiedUser?.age,
  //   created_at: especifiedUser?.created_at,
  //   updated_at: especifiedUser?.updated_at,
  // };

  const { password, ...userFound }: { password: string; userFound: any } =
    especifiedUser;

  return userFound;
};

export default userListId;
