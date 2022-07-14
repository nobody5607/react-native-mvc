import React from 'react';
//redux
import {useSelector} from 'react-redux';
import {useAppDispatch} from '@redux/store';
import {getProducts, productSelector} from '@redux/product/product.slice';
import {Product, ProductSearch, Scroll} from '@models/product.model';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductController = () => {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [filterProduct, setFilterProduct] = React.useState<ProductSearch>({});

  const isDarkMode = useColorScheme() === 'dark'; //'light','dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {data, error, loading, pagination, count} =
    useSelector(productSelector);

  //getProductAll func
  const getProductAll = () => {
    console.log('load product...');
    dispatch(getProducts(filterProduct))
      .unwrap()
      .then(res => {
        setProducts(res.data);
      });
  };

  //refresh product
  const onRefresh = React.useCallback(() => {
    dispatch(getProducts(filterProduct));
  }, []);

  //load more
  const loadMore = async () => {
    if (pagination?.page && data.length > 0) {
      let filter = {
        page: pagination.page + 1,
      };
      dispatch(getProducts(filter))
        .unwrap()
        .then(res => {
          setProducts(data.concat(res.data));
        });
    }
  };

  //isCloseToBottom
  const isCloseToBottom = (scroll: Scroll) => {
    const paddingToBottom = 20;
    return (
      scroll.layoutMeasurement.height + scroll.contentOffset.y >=
      scroll.contentSize.height - paddingToBottom
    );
  };

  React.useEffect(() => {
    getProductAll();
  }, [dispatch]);

  return {
    products,
    error,
    loading,
    pagination,
    count,
    onRefresh,
    refreshing,
    isCloseToBottom,
    loadMore,
    isDarkMode,
    backgroundStyle,
  };
};
export default ProductController;
