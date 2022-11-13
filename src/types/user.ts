export interface UserResponseProps {
  accessToken: string;
  user: UserProps;
}

export interface UserFetchResponseProps {
  address: string;
  age: number;
  birth_date: Date;
  created_at: Date;
  detail_address: string;
  email: string;
  gender_origin: GenderOriginProps;
  id: number;
  last_login: Date;
  name: string;
  phone_number: string;
  photo: string;
  updated_at: Date;
  uuid: string;
}

export interface UserInputProps {
  email: string;
  password: string;
}

type GenderOriginProps = 1 | 2;

interface UserProps {
  id: number;
  email: string;
  name: string;
}
