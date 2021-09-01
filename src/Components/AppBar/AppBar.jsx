import { useSelector } from 'react-redux';
import CustomHeader from './AppBar.styled';
import NavMenu from 'Components/NavMenu';
import UserMenu from 'Components/UserMenu';
import AuthMenu from 'Components/AuthMenu';
import authSelectors from 'redux/Authorization/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <CustomHeader>
      <NavMenu />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </CustomHeader>
  );
}
