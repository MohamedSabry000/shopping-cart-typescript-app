import * as React from 'react';
import { FakeStoreContextType, IProduct } from '../@types/fakestore';

export const FakeStoreContext = React.createContext<FakeStoreContextType | null>(null);

const FakeStoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [cart, setCart] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const addProducts = (snippet: IProduct[]) => setProducts([...products, ...snippet]);
  const addToCart = (snippet: IProduct) => setCart(prev => [...prev, snippet]);
  const removeFromCart = (snippet: IProduct) => setCart(prev => prev.filter(item => item.id !== snippet.id));

  return <FakeStoreContext.Provider value={{
     products, setProducts, addProducts,
     cart, addToCart, removeFromCart,
     loading, setLoading,
     error, setError
    }}>{children}</FakeStoreContext.Provider>;
};

export default FakeStoreProvider;