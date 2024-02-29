import { Hono } from "hono";

import * as user_controller from "../controllers/users.controller";

const user = new Hono();
user.post("/", user_controller.addUser);

user.post("/login", user_controller.login);

export default user;
