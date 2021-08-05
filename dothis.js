const fs = require("fs/promises");
const path = require("path");
// @see https://github.com/prisma/prisma/issues/1673#issuecomment-647107891

const main = async () => {
  const serverCaFile = await fs.readFile(
    path.resolve("prisma", "server-ca.pem")
  );
  const clientIdentityFile = await fs.readFile(
    path.resolve("prisma", "client-identity.p12")
  );

  const serverCa = Buffer.from(serverCaFile).toString("base64");
  console.log("SERVER CA");
  console.log(serverCa);

  const clientIdentity = Buffer.from(clientIdentityFile).toString("base64");
  console.log("CLIENT IDENTITY");
  console.log(clientIdentity);
};

main();
