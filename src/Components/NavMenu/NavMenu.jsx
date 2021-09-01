import { useSelector } from 'react-redux';
import authSelectors from 'redux/Authorization/auth-selectors';
import { CustomNavLink } from './NavMenu.styled';

const NavMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn && <CustomNavLink to="/contacts">Контакты</CustomNavLink>}
    </nav>
  );
};

export default NavMenu;
