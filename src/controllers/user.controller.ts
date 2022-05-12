import { Request, Response } from "express";
import userCreateService from "../services/userCreate.service";
import userDeleteService from "../services/userDelete.service";
import userListService from "../services/userList.service";
import userListId from "../services/userListId.service";
import userUpdateService from "../services/userUpdate.service";

export default class UserController {
  async store(req: Request, res: Response) {
    try {
      const { name, email, password, age } = req.body;

      const newUser = await userCreateService({ name, email, password, age });

      return res.status(201).json(newUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await userListService();

      return res.json(users);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userListId(id);

      return res.json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, password, age } = req.body;

      const user = await userUpdateService(id, name, email, password, age);

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userDeleteService(id);

      return res.status(200).json({ message: "User deleted with sucess!" });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(401).send({
          error: err.name,
          message: err.message,
        });
      }
    }
  }
}
