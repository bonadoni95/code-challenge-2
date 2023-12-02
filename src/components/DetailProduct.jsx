import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../constant/product";

const DetailProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === +id);
  console.log(products, id);
  return (
    <div className="container">
      <div className="detail-product">
        <div className="detail-image">
          <img src={product.img} />
        </div>
        <div className="detail-content">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
