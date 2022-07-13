import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import base64 from 'react-native-base64';
import axios from 'axios';
import {RootState} from 'redux/store';
import {API_URL} from '@env';
import { Login, LoginForm } from 'models/auth.model';

const initialState: Login = {
  status: '',
  message: '',
  data: undefined,
  token: '',
  error: '',
  loading: false,
  islogin:false
};

export const LogIn = createAsyncThunk(
  'login/post',
  async (user: LoginForm, {rejectWithValue}) => {
    try {
      const userAuth = base64.encode(user.username + ':' + user.password);
      const response = await axios.post<Login>(
        `${API_URL}/user/login`,
        {},
        {
          headers: {
            Accept: 'application/json',
            version: '1.0',
            appname: 'katexoxo',
            Authorization: 'Basic ' + userAuth,
          },
        },
      );
      if (response.data.status === 'ok') {
        return response.data;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // fullfiled, pending, rejected
    builder
      .addCase(LogIn.pending, state => {
        state.loading = true;
        state.data = undefined;
        state.error = '';
        state.token = undefined;
        state.islogin = false;
      })
      .addCase(LogIn.fulfilled, (state, action: any) => {
        state.loading = false;
        state.error = '';
        state.data = action.payload.data;
        state.token = action.payload.token;
        state.islogin = true;
      })
      .addCase(LogIn.rejected, (state, action: any) => {
        state.loading = false;
        state.data = undefined;
        state.error = action.payload.message;
        state.token = undefined;
        state.islogin = false;
      });
  },
});
export const loginSelector = (store: RootState): Login => store.login;
export default loginSlice.reducer;
