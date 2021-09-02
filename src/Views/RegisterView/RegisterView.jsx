import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/Authorization/auth-operations';
import {
  RegisterContainer,
  CustomForm,
  Invitation,
} from './RegisterView.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <CustomForm onSubmit={handleSubmit}>
        <Invitation>Welcome to the registration page!</Invitation>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Form.Group>

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
          Register
        </Button>
      </CustomForm>
    </RegisterContainer>
  );
}

export default RegisterView;
