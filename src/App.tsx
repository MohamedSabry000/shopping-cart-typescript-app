import { useContext, useEffect, useState } from "react";
// Components
import {Drawer, LinearProgress, Badge, Grid} from '@mui/material'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// Styles
import {Wrapper} from './App.styles'
// APi
import { getList } from "./api";
import { FakestoreContextType } from "./@types/fakestore";
import { FakestoreContext } from "./context/FakestoreContext";

const App = () => {
  const { setLoading, setError, setProducts } = useContext(FakestoreContext) as FakestoreContextType;

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

  return <div className="App"> Hello World</div>;
}

export default App;
