import UserModal from "../mongo/users.model";
import { IUserBody, IUserLogin, IUserModel } from "../types/users.types";
import { encrypt } from "../utils/crypto.utils";

export const addUser = async (ctx: any) => {
  const body: IUserBody = await ctx.req.raw.json();
  const finalBody: IUserModel = {
    ...body,
    password: await encrypt(body.password),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const model = new UserModal(ctx);
  const response = await model.insert(finalBody);
  return ctx.json({
    message: "User added successfully",
    data: {
      id: response.insertedId,
    },
  });
};

export const login = async (ctx: any) => {
  const { email, password }: IUserLogin = await ctx.req.raw.json();

  const model = new UserModal(ctx);
  const user = await model.findOne({ email, password: encrypt(password) });
  if (!user) {
    return ctx.json({ message: "Invalid credentials" }, 401);
  } else {
    delete user.password;
    return ctx.json(user);
  }
};
