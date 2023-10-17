export interface Address {
  zip: number;
  city: string;
}

export interface FormUser {
  name: string;
  email: string;
  zip: string;
  birthday: Date;
  address?: Address;
}
