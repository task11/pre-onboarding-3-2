import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { fetchAccounts } from '../../../api/accounts';
import { queryKeys } from '../../../utils/constants/queryKeys';

export default function useAccounts() {
  const router = useRouter();
  const { page = '1' } = router.query;

  const { data = [], isLoading } = useQuery(
    [queryKeys.accounts, { page }],
    () => fetchAccounts(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    },
  );

  const handlePageNext = () => {
    if (Number.isNaN(Number(page)) || data.length === 0) return;
    router.push(`/account?page=${Number(page) + 1}`);
  };

  const handlePagePrev = () => {
    if (Number.isNaN(Number(page)) || page === '1') return;
    router.push(`/account?page=${Number(page) + -1}`);
  };
  return { data, isLoading, handlePageNext, handlePagePrev, page };
}
