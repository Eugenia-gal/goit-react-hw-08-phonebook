import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Authorization/auth-operations';
import {
  LoginContainer,
  CustomButton,
  CustomForm,
  CustomStrong,
  Invitation,
} from './LoginView.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginView() {
  const history = useHistory();
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
  const handleClick = () => {
    history.push('/register');
  };

  return (
    <LoginContainer>
      <CustomForm onSubmit={handleSubmit}>
        <Invitation>Login to the user's personal account</Invitation>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </CustomForm>
      <CustomStrong>or register if you don't have account</CustomStrong>
      <CustomButton variant="primary" type="button" onClick={handleClick}>
        Registration
      </CustomButton>
    </LoginContainer>
  );
}

export default LoginView;

/* <CustomForm
        onSubmit={handleSubmit}
        // autoComplete="off"
      >
        <h2>Вход в личный кабинет пользователя</h2>
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
      </CustomForm> */
