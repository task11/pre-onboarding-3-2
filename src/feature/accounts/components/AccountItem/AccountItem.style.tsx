import Link from 'next/link';
import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  height: 30px;

  td {
    font-size: 14px;
    word-break: break-all;
  }
`;

export const NavLink = styled(Link)`
  color: #4242ac;

  &:visited {
    color: #4242ac;
  }
`;
