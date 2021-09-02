import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebook/phonebook-operations';
import CustomForm from './Form.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name: name, number: number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          id="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          name="number"
          id="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Contact
      </Button>
    </CustomForm>
  );
}
