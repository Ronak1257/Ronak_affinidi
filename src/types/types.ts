export type ChildernProps = {
  children: React.ReactNode;
};
export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  email?: string;
  picture?: string;
  gender?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  birthdate?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phoneNumber?: string;
};