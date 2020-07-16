import React from "react";
import "./App.css";
import Curency from "./Components/Currency";
import ProductList from "./Containers/ProductList";

interface AppProps {

}

interface AppState {
  CurrencyCode: string;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    CurrencyCode: "INR"
  }
  render() {
    let { CurrencyCode } = this.state;
    return (
      < div className="App" >

        <Curency currencyChange={((code) => this.setState({ CurrencyCode: code }))}></Curency>
        <ProductList selectedCurrency={CurrencyCode}></ProductList>

      </div >
    );
  }
}

export default App;
