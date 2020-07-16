import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Product from "./Components/Product";
import Curency from "./Components/Currency";
import ProductList from "./Containers/ProductList";

function App() {
  let CurrencyCode: string = "INR";
  return (
    <div className="App">

      <Curency currencyChange={((code) => CurrencyCode = code)}></Curency>
      <ProductList selectedCurrency={CurrencyCode}></ProductList>

    </div>
  );
}

export default App;
