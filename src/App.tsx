import { useContext, useEffect } from "react";
// Components
import {LinearProgress} from '@mui/material'
import Home from "./screens/home/Home";
// APi
import { getList } from "./api";
import { FakeStoreContextType } from "./@types/fakestore";
import { FakeStoreContext } from "./context/FakestoreContext";

const App = () => {
  const { loading, setLoading, error, setError, setProducts } = useContext(FakeStoreContext) as FakeStoreContextType;

  useEffect(() => {
    setLoading(true);
    getList().then(data => {
      console.log(data)
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

  return loading ? <LinearProgress /> : error ? <div>{error}</div> : <Home />
}

export default App;
