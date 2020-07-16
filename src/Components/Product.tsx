import React from "react";
import { ProductModel } from "../Models/Product-Model";

interface ProductProps {
  pData: ProductModel;
  wishList?: boolean;
}
class Product extends React.Component<ProductProps> {
  static defaultProps = {
    wishList: false
  }
  render() {
    const { pData, wishList } = this.props;
    return (
      <div>
        <img src={pData.productImage}></img>
        <h2> {pData.productName}</h2>
        <h3>{pData.productPrice}</h3>
        <button>Add to {wishList ? "wishList" : "Cart"}</button>
      </div>
    );
  }
}

export default Product;
