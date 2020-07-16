import React from "react";
import Product from "../Components/Product";
import ProductModel from "../Models/Product-Model";

class ProductList extends React.Component {
  render() {
    const pList: ProductModel = {
      productId: 1000,
      productImage:
        "https://rukminim1.flixcart.com/image/416/416/kae95e80/mobile/2/z/r/motorola-g8-power-lite-pajc0008in-original-imafrz85cmz2ycx8.jpeg?q=70",
      productName: "Product 1",
      productPrice: 12999,
      productStock: true,
    };
    return (
      <div>
        <Product pData={pList} />
        <Product pData={pList} wishList={true} />
      </div>
    );
  }
}

export default ProductList;
