import { Router } from "express";
import UserController from "../controllers/user.controller";
import verifyAuthId from "../middlewares/authId.middleware";

const routes = Router();

const userControllers = new UserController();

routes.post("", userControllers.store);
routes.get("", userControllers.index);
routes.get("/:id", verifyAuthId, userControllers.show);
routes.patch("/:id", verifyAuthId, userControllers.update);
routes.delete("/:id", verifyAuthId, userControllers.delete);

export default routes;
