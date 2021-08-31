import { CustomContainer, UserInvitation } from './UserMenu.styled';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <CustomContainer>
      <UserInvitation>Добро пожаловать, </UserInvitation>
      <button
        type="button"
        onClick={
          console.log(
            'Пользователь вышел',
          ) /*() => dispatch(authOperations.logOut())*/
        }
      >
        Выйти
      </button>
    </CustomContainer>
  );
}
