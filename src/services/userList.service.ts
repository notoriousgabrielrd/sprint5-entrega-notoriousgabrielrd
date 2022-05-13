import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users: any = await userRepository.find();

  let newList: any = [];

  users.forEach((element: any) => {
    const {
      password,
      ...noPasswordUser
    }: { password: string; noPasswordUser: any } = element;

    newList.push(noPasswordUser);
  });
  return newList;
};

export default userListService;
