import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Authorization/auth-operations';
import { CustomForm, LoginField, LoginContainer } from './LoginView.styled';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginContainer>
      <h1>Вход в личный кабинет пользователя</h1>

      <CustomForm
        onSubmit={handleSubmit}
        // autoComplete="off"
      >
        <LoginField>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LoginField>

        <LoginField>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LoginField>

        <button type="submit">Войти</button>
      </CustomForm>
    </LoginContainer>
  );
}

export default LoginView;
