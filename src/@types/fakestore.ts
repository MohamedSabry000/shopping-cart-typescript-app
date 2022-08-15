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
  }
}

export type FakestoreContextType = {
  products: IProduct[];
  setProducts: (snippet: IProduct[]) => void;
  addProducts: (snippet: IProduct[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  // filtered: IYoutube[];
  // filter: (query: number) => void;
};