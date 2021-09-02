import { useSelector } from 'react-redux';
import authSelectors from 'redux/Authorization/auth-selectors';
import { CustomNavLink, Invitation, CustomNav } from './NavMenu.styled';

const NavMenu = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <CustomNav>
      {isLoggedIn ? (
        <CustomNavLink to="/contacts">My Phonebook</CustomNavLink>
      ) : (
        <Invitation>Remember people, not numbers!</Invitation>
      )}
    </CustomNav>
  );
};

export default NavMenu;
