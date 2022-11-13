import styled from 'styled-components';
import Icons from '../../../../components/Icons';

interface AccountsPagenationProps {
  handlePagePrev: () => void;
  handlePageNext: () => void;
}

const StyledPagenation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  button {
    transition: all 0.2s ease-in;
    fill: #7a7a7a;
    &:hover {
      fill: #292929;
    }
  }
`;

export default function AccountsPagenation({
  handlePagePrev,
  handlePageNext,
}: AccountsPagenationProps) {
  return (
    <StyledPagenation>
      <button type="button" onClick={handlePagePrev}>
        <Icons.ArrowLeft />
      </button>
      <button type="button" onClick={handlePageNext}>
        <Icons.ArrowRight />
      </button>
    </StyledPagenation>
  );
}
