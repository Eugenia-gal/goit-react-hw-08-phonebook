import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const CustomNav = styled.nav`
  padding: 12px;
`;

export const CustomNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;

  &:hover {
    color: #e0e0e0;
  }
  &.active {
    color: #d9e66b;
  }
`;

export const Invitation = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;
