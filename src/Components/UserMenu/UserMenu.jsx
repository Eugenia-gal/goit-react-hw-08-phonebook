import { CustomContainer, UserInvitation, LogOutBtn } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/Authorization/auth-selectors';
import authOperations from 'redux/Authorization/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <CustomContainer>
      <UserInvitation>Welcome, {email}!</UserInvitation>
      <LogOutBtn
        variant="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutBtn>
    </CustomContainer>
  );
}
