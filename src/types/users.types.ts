export interface IUserBody {
  name: string;
  email: string;
  password: string;
  type: "referer" | "candidate";
}

export interface IUserModel extends IUserBody {
  createdAt: Date;
  updatedAt: Date;
}
export interface IUserLogin {
  email: string;
  password: string;
}
