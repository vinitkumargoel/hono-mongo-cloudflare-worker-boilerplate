import { mongoDBAtlas } from "../utils/mongoAtlas.utils";

export default (c: any, next: any) => {
  const { REALM_APP_ID, REALM_API_KEY } = c.env;
  return mongoDBAtlas({
    realmAppId: REALM_APP_ID,
    realmApiKey: REALM_API_KEY,
    defaultDb: "test",
    realmName: "realm01",
  })(c, next);
};
