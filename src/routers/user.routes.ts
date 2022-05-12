import { Router } from "express";
import UserController from "../controllers/user.controller";

const routes = Router();

const userControllers = new UserController();

routes.post("", userControllers.store);
routes.get("", userControllers.index);
routes.get("/:id", userControllers.show);
routes.patch("/:id", userControllers.update);
routes.delete("/:id", userControllers.delete);
export default routes;
