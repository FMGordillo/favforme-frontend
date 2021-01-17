import { useAuth as useAuth0Auth } from "use-auth0-hooks";
import { UseAuthResult } from "use-auth0-hooks/dist/hooks/use-auth";
import { AccessTokenRequestOptions } from "use-auth0-hooks/dist/context/auth0-context";

const defaultConfig: AccessTokenRequestOptions = {
  audience: "https://favforme-api-dev.herokuapp.com",
  scope: "",
};

export const useAuth = (
  config?: AccessTokenRequestOptions | undefined
): UseAuthResult => useAuth0Auth({ ...defaultConfig, ...config });
