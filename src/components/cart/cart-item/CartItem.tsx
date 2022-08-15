import { Button } from "@mui/material";
import { useContext } from "react";
import { FakeStoreContextType, IProduct } from "../../../@types/fakestore";
import { FakeStoreContext } from "../../../context/FakestoreContext";

import { Wrapper } from "./CartItem.styles";


const CartItem: React.FC<{ product: IProduct }> = ({ product }) => {

  const { addToCart, removeFromCart } = useContext(FakeStoreContext) as FakeStoreContextType;

  return (
    <Wrapper>
      <div>
        <h3>{product.title}</h3>
        <div className="information">
          <p>${product.price}</p>
          <p>Title: ${(product.quantity * product.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(product)}>
            -
          </Button>
          <p>{product.quantity}</p>
          <Button size="small" disableElevation variant="contained" onClick={() => addToCart(product)}>
            +
          </Button>
        </div>
      </div>
      <img src={product.image} alt={product.title} />
    </Wrapper>
  )
}

export default CartItem;
