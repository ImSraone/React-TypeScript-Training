import React from "react";
import Product from "../Components/Product";
import ProductModel from "../Models/Product-Model";

class ProductList extends React.Component {
  render() {
    const pList: ProductModel[] = [{
      productId: 1000,
      productImage:
        "https://rukminim1.flixcart.com/image/416/416/kae95e80/mobile/2/z/r/motorola-g8-power-lite-pajc0008in-original-imafrz85cmz2ycx8.jpeg?q=70",
      productName: "Product 1",
      productPrice: 12999,
      productStock: true,
    }, {
      productId: 1001,
      productImage:
        "https://rukminim1.flixcart.com/image/416/416/kae95e80/mobile/2/z/r/motorola-g8-power-lite-pajc0008in-original-imafrz85cmz2ycx8.jpeg?q=70",
      productName: "Product 2",
      productPrice: 14999,
      productStock: false,
    }];
    return (
      <div>
        {
          pList.map(value => <Product pData={value} key={value.productId} />)
        }
      </div>
    );
  }
}

export default ProductList;
