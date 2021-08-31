import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

const CustomNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #006891;
  }
`;

export default CustomNavLink;
