import { useContext, useState } from 'react';
import { Drawer, Grid, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FakeStoreContextType, IProduct } from '../../@types/fakestore';
import { FakeStoreContext } from '../../context/FakestoreContext';
import Item from '../../components/item/Item';
import { Wrapper, StyledButton } from '../../App.styles';
import Cart from '../../components/cart/Cart';

const Home: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const { products, cart } = useContext(FakeStoreContext) as FakeStoreContextType;

  const getTotalItems = () => cart.reduce((acc: number, item) => acc + item.quantity, 0);

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems()} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {products?.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home;