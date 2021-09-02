import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CustomNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
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
