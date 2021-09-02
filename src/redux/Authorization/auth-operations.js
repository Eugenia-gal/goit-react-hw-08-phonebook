import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userDetails);
      token.set(data.token);
      toast.success('You have successfully registered!');
      return data;
    } catch (error) {
      toast.error('Oppps, something went wrong! Try again please');
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userDetails);
      token.set(data.token);
      toast.success('You are successfully logged in!');
      return data;
    } catch (error) {
      toast.error('Please check if you entered password and email correctly');
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      toast.success('See you later!');
    } catch (error) {
      toast.error('Oppps, something went wrong! Try again please');
      return rejectWithValue(error.message);
    }
  },
);

const refreshUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    toast.error('Oppps, something went wrong! Try again please');
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
};
export default operations;
