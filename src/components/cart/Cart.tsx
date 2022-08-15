import CartItem from './cart-item/CartItem';

import {Wrapper} from './Cart.styles';
import { useContext, useEffect } from 'react';
import { FakeStoreContext } from '../../context/FakestoreContext';
import { FakeStoreContextType } from '../../@types/fakestore';
import { Grid } from '@mui/material';

const Cart: React.FC = () => {

  const { cart } = useContext(FakeStoreContext) as FakeStoreContextType;
  const calculateTotla = () => cart.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <Grid container spacing={2}>
        {cart.map(item => (
          <Grid item key={item.id} style={{width: '100%'}}>
            <CartItem key={item.id} product={item} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <h3>Total: ${calculateTotla().toFixed(2)}</h3>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Cart;