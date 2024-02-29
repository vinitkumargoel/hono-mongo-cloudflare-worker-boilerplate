import { Hono } from "hono";
import { cors } from "hono/cors";

import mongoConfig from "./configs/mongo.config";
import userRouter from "./routes/users.route";
import companyRouter from "./routes/companies.route";

const app = new Hono();

app.use("*", mongoConfig);
app.use("*", cors());

app.route("/users", userRouter);
app.route("/companies", companyRouter);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
