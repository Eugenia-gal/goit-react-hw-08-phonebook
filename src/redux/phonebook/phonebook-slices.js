import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { getContacts, addContact, deleteContact } from './phonebook-operations';

const itemsInitialState = { items: [], status: null, error: null };
const filterInitialState = '';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: itemsInitialState,
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      status: null,
      error: null,
    }),
    [getContacts.pending]: (state, _) => ({
      ...state,
      status: 'loading',
      error: null,
    }),
    [getContacts.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
    [addContact.fulfilled]: (state, { payload }) => {
      if (payload) {
        toast.success(`Контакт ${payload.name} добавлен`);
        return {
          ...state,
          items: [...state.items, payload],
          status: null,
          error: null,
        };
      }
      return state;
    },
    [addContact.pending]: (state, _) => ({
      ...state,
      status: 'adding',
      error: null,
    }),
    [addContact.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
    [deleteContact.fulfilled]: (state, { payload }) => {
      toast.success(`Контакт ${payload.name} удален`);
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== payload.id),
        status: null,
        error: null,
      };
    },
    [deleteContact.pending]: (state, _) => ({
      ...state,
      status: 'deleting',
      error: null,
    }),
    [deleteContact.rejected]: (state, { error }) => ({
      ...state,
      status: 'error',
      error: error.message,
    }),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(_, { payload }) {
      return payload;
    },
  },
});

const contacts = contactsSlice.reducer;
const filter = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;
export { contacts, filter };
