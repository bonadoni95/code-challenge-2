import React from "react";
import { products } from "../constant/product";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="container">
      <section className="products-services">
        <div className="container">
          <div className="card-container">
            {products.map((product, productid) => {
              return (
                <Link
                  key={`product-${productid}`}
                  className="card"
                  to={`/product/${product.id}`}
                >
                  <img src={product.img} />
                  <span>{product.name}</span>
                  <p>{product.description}</p>
                </Link>
              );
            })}
          </div>
          <p>
            We sell high quality products to our customers ranging from pianos,
            keyboards, guitars, bass guitars, brass instruments, and many more!
            Not only that, we can also repair broken old and new instruments!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
