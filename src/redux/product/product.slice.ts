import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {API_URL} from '@env';
import {ProductResult} from '@models/product.model';
import axios from 'axios';

const initialState: ProductResult = {
  data: [],
  count: 0,
  pagination: null,
  background_image: '',
  loading: true,
  error: null,
};

//product
export const getProduct = createAsyncThunk(
  'product/get',
  async (_, {rejectWithValue}) => {
    try {
      const url = `${API_URL}/product/all-product?limit=100`;
      const response = await (
        await axios.get<ProductResult>(url, {
          headers: {},
        })
      ).data;
      return response;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // fullfiled, pending, rejected
    builder
      .addCase(getProduct.pending, state => {
        state.loading = true;
        state.data = [];
        state.error = '';
        state.count = 0;
        state.pagination = undefined;
        state.background_image = '';
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.data = action.payload.data;
        state.count = action.payload.count;
        state.pagination = action.payload.pagination;
        state.background_image = action.payload.background_image;
      })
      .addCase(getProduct.rejected, (state, action: any) => {
        state.loading = false;
        state.data = [];
        state.count = 0;
        state.pagination = undefined;
        state.background_image = '';
        state.error = action.payload.message;
      });
  },
});
export const productSelector = (store: RootState): ProductResult => store.product;
export default productSlice.reducer;
