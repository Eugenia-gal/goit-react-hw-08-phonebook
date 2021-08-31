import styled from '@emotion/styled/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: '#E84A5F';
  }
`;

export default CustomNavLink;
