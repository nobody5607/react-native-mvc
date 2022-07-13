import React from 'react';
//redux
import {useSelector} from 'react-redux';
import {useAppDispatch} from '@redux/store';
import {getProduct, productSelector} from '@redux/product/product.slice';

const ProductController = () => {
  const dispatch = useAppDispatch();
  const {data, error, loading} = useSelector(productSelector);
  React.useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return {
    data,
    error,
    loading,
  };
};
export default ProductController;
