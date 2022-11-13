export interface UserResponseProps {
  accessToken: string;
  user: UserProps;
}

interface UserProps {
  id: number;
  email: string;
  name: string;
}

export interface UserInputProps {
  email: string;
  password: string;
}
