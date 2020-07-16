import React from "react";
import { ProductModel } from "../Models/Product-Model";

interface ProductProps {
  pData: ProductModel;
  wishList?: boolean;
  code: string
}
class Product extends React.Component<ProductProps> {
  static defaultProps = {
    wishList: false
  }
  renderButton(stock: boolean) {
    if (stock) {
      return <button>Add to Cart</button>
    }
    return <p>Out of Stock</p>
  }
  render() {
    const { pData, wishList, code } = this.props;
    return (
      <div>
        <img src={pData.productImage}></img>
        <h2> {pData.productName}</h2>
        <h3>{code} {pData.productPrice}</h3>
        <button>Add to {wishList ? "wishList" : "Cart"}</button>
        {this.renderButton(pData.productStock)}
      </div>
    );
  }
}

export default Product;
