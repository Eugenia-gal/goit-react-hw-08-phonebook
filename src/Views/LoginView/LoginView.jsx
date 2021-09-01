import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Authorization/auth-operations';
import { CustomForm, LoginField, LoginContainer } from './LoginView.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
  const handleClick = () => {};

  return (
    <>
      <LoginContainer>
        {/* <CustomForm
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
      </CustomForm> */}
        <Form onSubmit={handleSubmit}>
          <h2>Вход в личный кабинет пользователя</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Электронный адрес</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Введите e-mail"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Введите пароль"
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </LoginContainer>
      <Button variant="primary" type="button" onClick={handleClick}>
        Primary
      </Button>
    </>
  );
}

export default LoginView;
