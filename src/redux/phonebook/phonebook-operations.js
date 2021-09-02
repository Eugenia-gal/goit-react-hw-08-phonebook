import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (error) {
      toast.error('Oppps, something went wrong! Try again please');
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const result1 = await axios.get('/contacts');
      const contactNames = result1.data.map(contact => contact.name);
      const isRepeat = contactNames.indexOf(newContact.name) !== -1;
      if (isRepeat) {
        toast.error(`${newContact.name} is already in Contacts`);
        return;
      } else {
        const result = await axios.post('/contacts', newContact);
        console.log(result.data);
        return result.data;
      }
    } catch (error) {
      toast.error('Oppps, something went wrong! Try again please');
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      toast.error('Oppps, something went wrong! Try again please');
      return rejectWithValue(error.message);
    }
  },
);
