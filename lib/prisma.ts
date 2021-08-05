// @see https://github.com/prisma/prisma/issues/1673#issuecomment-647107891
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { tmpdir } from "os";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient | undefined;

try {
  if (process.env.NODE_ENV !== "development" && !window) {
    const AES =
      "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";
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require("fs");
    const {
      SERVER_CERTIFICATE,
      CLIENT_IDENTITY_IV,
      CLIENT_IDENTITY_KEY,
    } = process.env;
    // We avoid undefined variables
    if (!SERVER_CERTIFICATE || !CLIENT_IDENTITY_IV || !CLIENT_IDENTITY_KEY) {
      throw new Error("No required env vars provided");
    } else {
      fs.writeFileSync(`${tmpdir()}/server-ca.pem`, SERVER_CERTIFICATE);
      const algorithm = "aes-128-cbc";
      const decipher = crypto.createDecipheriv(
        algorithm,
        CLIENT_IDENTITY_KEY,
        CLIENT_IDENTITY_IV
      );

      const getDecryptedSecret = () => {
        let decrypted = decipher.update(AES, "base64", "utf8");
        decrypted += decipher.final("utf8");
        return decrypted;
      };

      fs.writeFileSync(
        `${tmpdir()}/client-identity.p12`,
        getDecryptedSecret(),
        "base64"
      );

      prisma = new PrismaClient({});
    }
  } else {
    // @ts-ignore
    if (!global.prisma) {
      // @ts-ignore
      global.prisma = new PrismaClient();
    }
    // @ts-ignore
    prisma = global.prisma;
  }
} catch (error) {
  console.log("HABER", error);
}

export default prisma;
