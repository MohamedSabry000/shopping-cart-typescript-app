import { Button } from '@mui/material'
import { useContext } from 'react';

import { FakeStoreContextType, IProduct } from '../../@types/fakestore'
import { FakeStoreContext } from '../../context/FakestoreContext';
import { Wrapper } from './Item.styles'

const Item: React.FC<{ product: IProduct }> = ({ product }) => {

  const { addToCart, removeFromCart } = useContext(FakeStoreContext) as FakeStoreContextType;

return (
  <Wrapper>
    <img src={product.image} alt={product.title} />
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
    <Button onClick={() => addToCart(product)}>Add to cart</Button>
  </Wrapper>
)
}

export default Item;