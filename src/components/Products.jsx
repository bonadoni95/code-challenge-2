import React from "react";
import { products } from "../constant/product";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container">
      <section className="products-services">
        <div className="container">
          <div className="card-container">
            {products.map((product) => {
              return (
                <Link className="card" to={`/product/${product.id}`}>
                  <img src={product.img} />
                  <span>{product.name}</span>
                  <p>{product.description}</p>
                </Link>
              );
            })}
          </div>
          <p>
            Product: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nulla in doloremque quae hic soluta odit sequi assumenda atque
            facilis veniam voluptate totam accusantium ad, et, sint repellendus
            eveniet ex dolor.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
