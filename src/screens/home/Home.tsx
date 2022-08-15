import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import { FakeStoreContextType } from '../../@types/fakestore';
import { Wrapper } from '../../App.styles';
import Item from '../../components/item/Item';
import { FakeStoreContext } from '../../context/FakestoreContext';

const Home: React.FC = () => {

  const { products } = useContext(FakeStoreContext) as FakeStoreContextType;

  return (
    <Wrapper>
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