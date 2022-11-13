import styled from 'styled-components';
import Icons from '../../../../components/Icons';

interface AccountsPagenationProps {
  page: string | string[];
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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in;
    fill: #7a7a7a;
    &:hover {
      fill: #292929;
    }
  }
  span {
    width: 50px;
    font-size: 12px;
    font-weight: 700;
  }
`;

export default function AccountsPagenation({
  page,
  handlePagePrev,
  handlePageNext,
}: AccountsPagenationProps) {
  return (
    <StyledPagenation>
      <button type="button" onClick={handlePagePrev}>
        <Icons.ArrowLeft />
      </button>
      <span>{page} page</span>
      <button type="button" onClick={handlePageNext}>
        <Icons.ArrowRight />
      </button>
    </StyledPagenation>
  );
}
