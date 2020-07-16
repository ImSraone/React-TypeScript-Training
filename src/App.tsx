import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Product from "./Components/Product";
import Curency from "./Components/Currency";
import ProductList from "./Containers/ProductList";

function App() {
  return (
    <div className="App">

      {/* <Demo /> */}
      {/* <Product /> */}
      <Curency></Curency>
      <ProductList></ProductList>

    </div>
  );
}

export default App;
