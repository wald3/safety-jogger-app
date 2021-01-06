export interface Product {
  id: number;
  status: number;
  image_link: string;
  product: {
    code: string,
    id: number
  };
  score: number;
}