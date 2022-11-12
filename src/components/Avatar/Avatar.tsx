import { StyledImg } from './Avatar.style';

interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return <StyledImg src={src || '/static/defaultProfile.jpeg'} />;
}
