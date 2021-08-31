import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Authorization/auth-operations';
import {
  CustomForm,
  RegisterField,
  RegisterContainer,
} from './RegisterView.styled';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    const userDetails = { name, email, password };
    dispatch(authOperations.register(userDetails));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <h1>Добро пожаловать на страницу регистрации!</h1>

      <CustomForm onSubmit={handleSubmit}>
        <RegisterField>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </RegisterField>

        <RegisterField>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </RegisterField>

        <RegisterField>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </RegisterField>

        <button type="submit">Зарегистрироваться</button>
      </CustomForm>
    </RegisterContainer>
  );
}

export default RegisterView;
