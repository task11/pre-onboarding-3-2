import { StyledAuthInputs } from './AuthInputs.style';

import { UserInputProps } from '../../../../types/user';

import InputWithLabel from '../../../../components/InputWithLabel/InputWithLabel';
import Icons from '../../../../components/Icons';

interface AuthInputsProps {
  userInput: UserInputProps;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInputs({
  userInput,
  handleInputChange,
}: AuthInputsProps) {
  const { email, password } = userInput;

  return (
    <StyledAuthInputs>
      <InputWithLabel
        type="email"
        icon={<Icons.User />}
        label="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="아이디를 입력하세요"
      />
      <InputWithLabel
        type="password"
        icon={<Icons.Lock />}
        label="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="비밀번호를 입력하세요"
      />
    </StyledAuthInputs>
  );
}
