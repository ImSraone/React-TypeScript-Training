import React from "react";
import { ProductModel } from "../Models/Product-Model";

interface ProductProps {
  pData: ProductModel;
}
class Product extends React.Component<ProductProps> {
  render() {
    const pData = this.props.pData;
    return (
      <div>
        <img src={pData.productImage}></img>
        <h2> {pData.productName}</h2>
        <h3>{pData.productPrice}</h3>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
