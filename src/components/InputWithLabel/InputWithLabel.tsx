import { StyledInput, StyledInputWrapper } from './InputWithLabel.style';

interface InputWithLabelProps {
  type: string;
  icon?: React.ReactNode;
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  type,
  icon,
  label,
  value,
  name,
  placeholder,
  onChange,
}: InputWithLabelProps) {
  return (
    <StyledInputWrapper>
      {icon}
      <label style={{ display: 'none' }} htmlFor={label}>
        {label}
      </label>
      <StyledInput
        id={label}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
}
