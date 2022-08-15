import * as React from 'react';
import { FakestoreContextType, IProduct } from '../@types/fakestore';

export const FakestoreContext = React.createContext<FakestoreContextType | null>(null);

const FakestoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const addProducts = (snippet: IProduct[]) => setProducts([...products, ...snippet]);

  return <FakestoreContext.Provider value={{ products, setProducts, addProducts, loading, setLoading, error, setError }}>{children}</FakestoreContext.Provider>;
};

export default FakestoreProvider;