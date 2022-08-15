export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  },
  quantity: number
}

export type FakeStoreContextType = {
  products: IProduct[];
  setProducts: (snippet: IProduct[]) => void;
  addProducts: (snippet: IProduct[]) => void;
  cart: IProduct[];
  addToCart: (snippet: IProduct) => void;
  removeFromCart: (snippet: IProduct) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  // filtered: IYoutube[];
  // filter: (query: number) => void;
};