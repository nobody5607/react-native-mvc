import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
// import {Register, RegisterForm} from '../../models/auth.model';

const initialState: any = {
  message: '',
  error: '',
  loading: false,
  status: '',
  data: undefined,
};

//search
export const register = createAsyncThunk(
  'register/post',
  async (formData: any, {rejectWithValue}) => {
    try {
     return '';
    } catch (err: any) {
      console.log(err, 'error');
      return rejectWithValue(err);
    }
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // fullfiled, pending, rejected
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.message = '';
        state.data = undefined;
      })
      .addCase(register.fulfilled, (state, action:any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = undefined;
      })
      .addCase(register.rejected, (state, action: any) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
      });
  },
});
export const registerSelector = (store: RootState): any => store.register;
export default registerSlice.reducer;
