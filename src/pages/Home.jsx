import React from "react";
import Hero from "../components/Hero";
import { products } from "../constant/product";
import { Link } from "react-router-dom";
import { teams } from "../constant/team";
import videoTest from "../assets/image/testvideo.mp4";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="company-overview">
        <video controls style={{ height: 250, width: 400 }}>
          <source src={videoTest} type="video/mp4" />
        </video>
        <p>
          BRIEF OVERVIEW: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis ducimus amet molestiae voluptas veniam deserunt
          suscipit consequuntur, eaque facilis, nulla vero libero ut. Iure, cum
          mollitia labore aperiam magnam aliquid?
        </p>
      </section>
      <section className="products-services">
        <div className="container">
          <h2>OUR PRODUCTS</h2>
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
            Product: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nulla in doloremque quae hic soluta odit sequi assumenda atque
            facilis veniam voluptate totam accusantium ad, et, sint repellendus
            eveniet ex dolor.
          </p>
        </div>
      </section>
      <section className="section-teams">
        <div className="container">
          <h2>OUR TEAM MEMBERS</h2>
          <div className="teams">
            {teams.map((team, teamid) => {
              return (
                <div key={`team-${teamid}`} className="team">
                  <div>
                    <img src={team.img} />
                  </div>
                  <span>{team.name}</span>
                  <p>{team.position}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>SOME TESTIMONIALS FROM OUR CUSTOMERS</h2>
          <div className="testimony">
            <h4>Mr. Alex</h4>
            <p>
              "I really like this product because it is cost-effective! I really
              like this product because it is cost-effective! I really like this
              product because it is cost-effective!"
            </p>
          </div>
          <div className="testimony"></div>
          <div className="testimony"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
