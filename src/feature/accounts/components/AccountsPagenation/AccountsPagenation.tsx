import Icons from '../../../../components/Icons';

import { StyledPagenation } from './AccountsPagenation.style';

interface AccountsPagenationProps {
  page: string | string[];
  handlePagePrev: () => void;
  handlePageNext: () => void;
}

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
