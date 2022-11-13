import { useEffect } from 'react';
import { fetchAccounts } from '../../../api/accounts';
import { StyledAccountsContainer } from './AccountsContainer.style';

export default function AccountsContainer() {
  useEffect(() => {
    const fn = async () => {
      const result = await fetchAccounts();
      console.log(result);
    };
    fn();
  }, []);
  return <StyledAccountsContainer>AccountsContainer</StyledAccountsContainer>;
}
