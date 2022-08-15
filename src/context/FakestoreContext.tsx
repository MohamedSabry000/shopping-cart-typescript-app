import * as React from 'react';
import { FakeStoreContextType, IProduct } from '../@types/fakestore';

export const FakeStoreContext = React.createContext<FakeStoreContextType | null>(null);

const FakeStoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [cart, setCart] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const addProducts = (snippet: IProduct[]) => setProducts([...products, ...snippet]);
  const addToCart = (snippet: IProduct) => {
    const item = cart.find(item => item.id === snippet.id);
    if (item) {
      console.log("add exist")

      setCart(prev => prev.map(item => item.id === snippet.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      console.log("add new")
      setCart(prev => [...prev, { ...snippet, quantity: 1 }]);
    }
  }
  const removeFromCart = (snippet: IProduct) => {
    const item = cart.find(item => item.id === snippet.id);
    if (item && item.quantity > 1) {
      setCart(cart.map(item => item.id === snippet.id ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      setCart(cart.filter(item => item.id !== snippet.id));
    }
  }

  return <FakeStoreContext.Provider value={{
     products, setProducts, addProducts,
     cart, addToCart, removeFromCart,
     loading, setLoading,
     error, setError
    }}>{children}</FakeStoreContext.Provider>;
};

export default FakeStoreProvider;