import { useAuthentication } from "src/lib/hooks/use-authentication";

export const useLocalContent = () => {
  const { isAuthenticated, user } = useAuthentication();

  return {
    email: isAuthenticated && user?.email,
    picture: isAuthenticated && user?.picture,
    firstName: isAuthenticated && user?.firstName,
    lastName: isAuthenticated && user?.lastName,
    birthdate: isAuthenticated && user?.birthdate,
    address: isAuthenticated && user?.address,
    city: isAuthenticated && user?.city,
    postalCode: isAuthenticated && user?.postalCode,
    phoneNumber: isAuthenticated && user?.phoneNumber,
    country: isAuthenticated && user?.country,
    gender: isAuthenticated && user?.gender,
  };
};
