import { useContext, useEffect, useState } from "react";
// Components
import {Drawer, LinearProgress, Badge, Grid} from '@mui/material'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// Styles
import {Wrapper} from './App.styles'
// APi
import { getList } from "./api";
import { FakeStoreContextType } from "./@types/fakestore";
import { FakeStoreContext } from "./context/FakestoreContext";

const App = () => {
  const { loading, setLoading, error, setError, setProducts } = useContext(FakeStoreContext) as FakeStoreContextType;

  useEffect(() => {
    setLoading(true);
    getList("react").then(data => {
      setProducts(data);
      setError("");
    }).catch(err => {
      console.log(err);
      setError(err.message);
    }).finally(() => {
      setLoading(false);
      console.log("finally");
    })
  } , [])

  return loading ? <LinearProgress /> : error ? <div>{error}</div>
    : <Wrapper>
        <div className="App"> Hello World</div>;
      </Wrapper>
}

export default App;
