import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchAccounts } from '../../../api/accounts';
import { queryKeys } from '../../../utils/constants/queryKeys';

export default function useAccounts() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { page = '1', q = '' } = router.query;

  const { data = [], isLoading } = useQuery(
    [queryKeys.accounts, { page, query: q }],
    () => fetchAccounts(q, page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
      staleTime: 60000,
    },
  );

  const handlePageNext = () => {
    if (Number.isNaN(Number(page)) || data.length === 0) return;
    router.push(`/account?q=${searchQuery}&page=${Number(page) + 1}`);
  };

  const handlePagePrev = () => {
    if (Number.isNaN(Number(page)) || page === '1') return;
    router.push(`/account?q=${searchQuery}&page=${Number(page) + -1}`);
  };

  const navigateToUserDetail = (userId: number) => {
    router.push(`/user/${userId}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setSearchQuery(value);
  };

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/account?q=${searchQuery}&page=${page}`);
  };

  return {
    data,
    page,
    searchQuery,
    isLoading,
    handlePageNext,
    handlePagePrev,
    handleInputChange,
    submitSearch,
    navigateToUserDetail,
  };
}
