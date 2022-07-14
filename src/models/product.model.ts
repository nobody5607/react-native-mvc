export interface Product {
  product_id: string;
  product_name: string;
  product_detail: string;
  price: number;
  disprice: string;
  stock: string;
  unit: string;
  weight: string;
  width: string;
  length: string;
  height: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  brand_id: string;
  brand_name: string;
  brand_icon: string;
  category_id: string;
  category_name: string;
  sub1_id: string;
  sub1_name: string;
  sub1_icon: string;
  sub2_id: string;
  sub2_name: string;
  sub2_icon: string;
}
export interface Pagination {
  page: number;
  items: string;
  totalPage: number;
}
export interface ProductSearch {
  category?: string;
  orderby?: string;
  page?: number;
  search?: string;
  onsale?: string;
  filter_condition?: string;
  filter_designer?: string;
  price?: string;
  filter_color?: string;
  brand?: string;
}
export interface ProductResult {
  count: number;
  data: Product[];
  pagination: Pagination | undefined | null;
  background_image: String;
  loading: boolean;
  error: string | null | undefined;
}

//scroll
export type Scroll = {
  layoutMeasurement: any;
  contentOffset: any;
  contentSize: any;
};
