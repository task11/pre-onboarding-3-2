import { StyledTable } from './AccountTable.style';

interface AccountsTableProps {
  children: React.ReactNode;
}

export default function AccountsTable({ children }: AccountsTableProps) {
  return <StyledTable>{children}</StyledTable>;
}
