import { CustomContainer, UserInvitation } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/Authorization/auth-selectors';
import authOperations from 'redux/Authorization/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <CustomContainer>
      <UserInvitation>Добро пожаловать, {email}!</UserInvitation>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </CustomContainer>
  );
}
