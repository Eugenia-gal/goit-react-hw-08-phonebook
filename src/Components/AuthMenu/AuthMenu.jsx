import CustomNavLink from './AuthMenu.styled';

export default function AuthNav() {
  return (
    <div>
      <CustomNavLink to="/register">Регистрация</CustomNavLink>
      <CustomNavLink to="/login">Логин</CustomNavLink>
    </div>
  );
}
