import { CustomNavLink, CustomContainer } from './AuthMenu.styled';

export default function AuthNav() {
  return (
    <CustomContainer>
      <CustomNavLink to="/register">Registration</CustomNavLink>
      <CustomNavLink to="/login">Log In</CustomNavLink>
    </CustomContainer>
  );
}
