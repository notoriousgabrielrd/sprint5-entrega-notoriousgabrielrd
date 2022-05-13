import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyAuthId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const accountToUpdate = users.find((users) => users.id === id);
    console.log("########################################");
    console.log("este e o id:", id);
    console.log("########################################");
    if (!accountToUpdate || !id) {
      throw new Error("User or Id not Found!");
    }

    next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default verifyAuthId;
