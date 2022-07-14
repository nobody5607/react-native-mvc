import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {API_URL} from '@env';
import {ProductResult, ProductSearch} from '@models/product.model';
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
export const getProducts = createAsyncThunk(
  'product/get',
  async (filter: ProductSearch, {rejectWithValue}) => {
    try {
      let params = '';
      if (filter.page) {
        params += `&page=${filter.page}`;
      }
      const url = `${API_URL}/product?limit=10${params}`;
      console.log(url);
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
      .addCase(getProducts.pending, state => {
        state.loading = true;
        state.data = [];
        state.error = '';
        state.count = 0;
        state.pagination = undefined;
        state.background_image = '';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.data = action.payload.data;
        state.count = action.payload.count;
        state.pagination = action.payload.pagination;
        state.background_image = action.payload.background_image;
      })
      .addCase(getProducts.rejected, (state, action: any) => {
        state.loading = false;
        state.data = [];
        state.count = 0;
        state.pagination = undefined;
        state.background_image = '';
        state.error = action.payload.message;
      });
  },
});
export const productSelector = (store: RootState): ProductResult =>
  store.product;
export default productSlice.reducer;
