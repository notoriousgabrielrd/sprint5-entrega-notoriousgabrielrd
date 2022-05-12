import express from "express";
import routes from "./routers/user.routes";

const app = express();

app.use(express.json());

app.use("/users", routes);

app.listen(3000, () => console.log("Server is running !"));
