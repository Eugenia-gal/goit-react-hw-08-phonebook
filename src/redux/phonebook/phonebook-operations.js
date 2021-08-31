import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const result = await axios.get(
      'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
    );
    return result.data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const result1 = await axios.get(
      'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
    );
    const contactNames = result1.data.map(contact => contact.name);
    const isRepeat = contactNames.indexOf(newContact.name) !== -1;

    if (isRepeat) {
      toast.error(`${newContact.name} is already in Contacts`);
      return;
    } else {
      const result = await axios.post(
        'https://6129fa91068adf001789b9d3.mockapi.io/contacts',
        newContact,
      );
      console.log(result.data);
      return result.data;
    }
  },
);

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const result = await axios.delete(
    `https://6129fa91068adf001789b9d3.mockapi.io/contacts/${id}`,
  );

  return result.data;
});
