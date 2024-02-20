import { Provider } from "next-auth/providers";
import {
  providerClientId,
  providerClientSecret,
  providerIssuer,
} from "src/lib/secrets";

export const PROVIDER_ATTRIBUTES_KEY = "custom";

export const provider: Provider = {
  id: "affinidi",
  name: "Affinidi",
  clientId: providerClientId,
  clientSecret: providerClientSecret,
  type: "oauth",
  wellKnown: `${providerIssuer}/.well-known/openid-configuration`,
  authorization: {
    params: {
      prompt: "login",
      scope: "openid offline_access",
    },
  },
  client: {
    token_endpoint_auth_method: "client_secret_post",
  },
  idToken: true,
  profile(profile: any) {
    console.log("PROFILE::: ", profile);
    return {
      id: profile.sub,
      email: profile.custom?.find((i: any) => typeof i.email === "string")
        ?.email,
      country: profile.custom?.find((i: any) => typeof i.country === "string")?.country,
      gender: profile.custom?.find((i: any) => typeof i.gender === "string")?.gender,
      firstName: profile.custom?.find((i: any) => typeof i.givenName === "string")?.givenName,
      lastName: profile.custom?.find((i: any) => typeof i.familyName === "string")?.familyName,
      picture: profile.custom?.find((i: any) => typeof i.picture === "string")?.picture,
      address: profile.custom?.find((i: any) => typeof i.streetAddresss === "string")?.streetAddress,
      city: profile.custom?.find((i: any) => typeof i.locality === "string")?.locality,
      postalCode: profile.custom?.find((i: any) => typeof i.postalCode === "string")?.postalCode,
      phoneNumber: profile.custom?.find((i: any) => typeof i.phoneNumber === "string")?.phoneNumber,

      
    };

  },
};
