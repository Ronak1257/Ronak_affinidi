import { NextAuthOptions } from "next-auth";
import { PROVIDER_ATTRIBUTES_KEY, provider } from "src/lib/auth/auth-provider";
import { UserInfo } from "src/types/types";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [provider],
  callbacks: {
    // checks whether user is allowed to sign in
    async signIn({ account }) {
      return Boolean(
        account?.provider === provider.id &&
          account.access_token &&
          account.id_token
      );
    },
    // "account" and "profile" are only passed the first time this callback is called on a new session, after the user signs in
    // this defines how JWT is generated and is then used in session() callback as "token"
    async jwt({ token, account, profile }) {
      const profileItems = (profile as any)?.[PROVIDER_ATTRIBUTES_KEY];
      if (profile && profileItems) {
        console.log("PROFILE ITEMS::: ", profileItems)
        let userDID: string;
        let user: UserInfo = {};
        userDID = profileItems.find(
          (item: any) => typeof item.did === "string"
        )?.did;
        user.email = profileItems.find(
          (item: any) => typeof item.email === "string"
        )?.email;
        user.picture = profileItems.find(
          (item: any) => typeof item.picture=== "string"
        )?.picture;
        user.gender = profileItems.find(
          (item: any) => typeof item.gender=== "string"
        )?.gender;
        user.firstName = profileItems.find(
          (item: any) => typeof item.givenName === "string"
        )?.givenName;
        user.lastName = profileItems.find(
          (item: any) => typeof item.familyName === "string"
        )?.familyName;
        user.country = profileItems.find(
          (item: any) => typeof item.country === "string"
        )?.country;
        user.birthdate = profileItems.find(
          (item: any) => typeof item.birthdate === "string"
        )?.birthdate;
        user.address = profileItems.find(
          (item: any) => typeof item.streetAddress === "string"
        )?.streetAddress;
        user.city = profileItems.find(
          (item: any) => typeof item.locality === "string"
        )?.locality;
        user.postalCode = profileItems.find(
          (item: any) => typeof item.postalCode === "string"
        )?.postalCode;
        user.phoneNumber = profileItems.find(
          (item: any) => typeof item.phoneNumber === "string"
        )?.phoneNumber;
        token = {
          ...token,
          user,
          ...(userDID && { userId: userDID }),
        };
      }

      if (account) {
        token = {
          ...token,
          ...(account?.access_token && { accessToken: account.access_token }),
          ...(account?.id_token && { idToken: account.id_token }),
        };
      }

      return token;
    },
    // session is persisted as an HttpOnly cookie
    async session({ session, token }) {
      return {
        ...session,
        ...(token.user && { user: { ...session.user, ...token.user } }),
        ...(token.accessToken && { accessToken: token.accessToken }),
        ...(token.idToken && { idToken: token.idToken }),
        ...(token.userId && { userId: token.userId }),
      };
    },
  },
};
