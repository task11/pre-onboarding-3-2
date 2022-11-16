import { AccountProps } from '../../../../types/accounts';
import {
  addCommas,
  checkActive,
  convertAccountState,
  convertBroker,
  convertDateToKr,
  maskingName,
} from '../../../../utils/useful';

interface UserAccountItemProps {
  account: AccountProps;
}

export default function UserAccountItem({ account }: UserAccountItemProps) {
  return (
    <tr>
      <td>{convertBroker(account.broker_id)}</td>
      <td>{maskingName(account.number)}</td>
      <td>{convertAccountState(account.status)}</td>
      <td>{account.name}</td>
      <td>{addCommas(account.assets)}</td>
      <td>{addCommas(account.payments)}</td>
      <td>{checkActive(account.is_active)}</td>
      <td>{convertDateToKr(account.created_at)}</td>
    </tr>
  );
}
