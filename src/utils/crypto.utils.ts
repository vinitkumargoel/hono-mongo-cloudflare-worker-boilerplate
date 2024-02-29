import * as crypto from "node:crypto";

export function encrypt(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}
