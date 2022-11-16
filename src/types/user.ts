export interface UserResponseProps {
  accessToken: string;
  user: UserProps;
}

export interface UserFetchResponseProps {
  address: string;
  age: number;
  birth_date: string;
  created_at: string;
  detail_address: string;
  email: string;
  gender_origin: GenderOriginProps;
  id: number;
  last_login: string;
  name: string;
  phone_number: string;
  photo: string;
  updated_at: string;
  uuid: string;
}

export interface UserInfoProps {
  address: string;
  age: number;
  birth_date: string;
  created_at: string;
  detail_address: string;
  email: string;
  gender_origin: GenderOriginProps;
  id: number;
  last_login: string;
  name: string;
  phone_number: string;
}

export interface UserInputProps {
  email: string;
  password: string;
}

type GenderOriginProps = 1 | 2 | 3;

interface UserProps {
  id: number;
  email: string;
  name: string;
}
