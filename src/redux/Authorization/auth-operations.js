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

const register = createAsyncThunk('auth/register', async userDetails => {
  try {
    const { data } = await axios.post('/users/signup', userDetails);
    token.set(data.token);
    toast.success('Вы успешно зарегистрировались!');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async userDetails => {
  try {
    const { data } = await axios.post('/users/login', userDetails);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('До новых встреч!');
  } catch (error) {
    console.log(error.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
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
    // TODO: Добавить обработку ошибки error.message
    console.log(error.message);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
};
export default operations;