export interface Product {
  product_id: string;
  product_model: string;
  product_name: string;
  brand_name: string;
  p_brand_mat: string;
  p_brand_color: string;
  p_brand_type: string;
  slug: string;
  product_description: string;
  product_price: string;
  price_number: number;
  price: number;
  discount_price: string;
  image: string;
  image_flip: string;
  created_at: string;
  p_on_sale: number;
  product_size: string;
  product_condition: string;
  product_type: string;
  color_name: string;
  accessories_all_text: string;
  p_order_status: number;
  categoryNames: string;
  type: number;

  favourite: number;
  wisglitecount: number;
}
export interface Pagination {
  page: number;
  items: string;
  totalPage: number;
}
export interface ProductSearch{
  category?:string;
  orderby?:string;
  page?:number;
  search?:string;
  onsale?:string;
  filter_condition?:string;
  filter_designer?:string;
  price?:string; 
  filter_color?:string;
  brand?:string;
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
