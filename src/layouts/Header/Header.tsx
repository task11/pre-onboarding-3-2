import styled from 'styled-components';

import Avatar from '../../components/Avatar/Avatar';
import Icons from '../../components/Icons';

const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  padding: 0px 24px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const userProfile = '';

  return (
    <StyledHeader>
      <StyledHeaderItems>
        <StyledIconWrapper>
          <svg height="24" width="24">
            <path d="M8,5 L3,5 L3,19 L8,19 L8,5 Z M10,5 L10,19 L21,19 L21,5 L10,5 Z M2.81818182,3 L21.1818182,3 C22.1859723,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1859723,21 21.1818182,21 L2.81818182,21 C1.81402773,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.81402773,3 2.81818182,3 Z" />
          </svg>
        </StyledIconWrapper>
        <h1>{title}</h1>
      </StyledHeaderItems>
      <StyledHeaderItems>
        <StyledIconWrapper>
          <Icons.Dot />
          <span>개발</span>
        </StyledIconWrapper>
        <StyledIconWrapper>
          <Icons.Question />
        </StyledIconWrapper>
        <StyledIconWrapper>
          <svg
            className="feather feather-bell"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </StyledIconWrapper>
        <Avatar src={userProfile} />
      </StyledHeaderItems>
    </StyledHeader>
  );
}
