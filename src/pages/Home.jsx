import React from "react";
import Hero from "../components/Hero";
import { products } from "../constant/product";
import { Link } from "react-router-dom";
import { teams } from "../constant/team";
import storevideo from "../assets/image/musicstoretour.mp4";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="company-overview">
        <h2>
          Are you looking for excellent music instruments for personal usage?
        </h2>
        <h2>Are you in need for large-scale procurement for big events?</h2>
        <h3>
          Look no further... Sweetwater MUSIC SHOP can cover all your musical
          needs!
        </h3>
        <video
          controls
          style={{
            display: "block",
            maxHeight: 250,
            maxWidth: 400,
            margin: "0 auto",
            paddingBottom: 12,
          }}
        >
          <source src={storevideo} type="video/mp4" />
        </video>
      </section>
      <section className="company-overview-2">
        <h4>
          Since the 1970s, we have been serving many music makers ranging from
          toddlers to adults, from newbies to professionals. Your satisfaction
          has been our main goal. We always make sure that every product we
          deliver is of high quality and support to customers is provided any
          time they need it.
        </h4>
        <h4>
          Our team consists of professionals who have years of experience in the
          music field, either as a pro-level musicians or technicians.
        </h4>
        <h4>
          Keeping these three values in mind, we build our customers' trust in
          us, our employees’ dedication to the company, a comfortable work
          environment and effective business.
        </h4>
        <section className="value-statement">
          <h4>- Do the Right Thing!</h4>
          <h4>- We WOW Customers</h4>
          <h4>- We get things done</h4>
          <h4>- We obsess over details</h4>
          <h4>- We drive continuous improvement</h4>
          <h4>- We develop the future</h4>
        </section>
        <h4>
          We look forward to the opportunity to serve even more music makers in
          the future and can’t wait to invite you along on the journey.
        </h4>
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
        </div>
      </section>
      {/* this line used to include teams section */}
      <section className="testimonials">
        <div className="container">
          <h2>SOME TESTIMONIALS FROM OUR CUSTOMERS</h2>
          <div className="testimony">
            <h4>Mr. Alex</h4>
            <p>
              "I recently bought a new digital piano for my 6-year old son who
              is just learning the piano. I have no idea which one that suits
              him. I really appreciate the staff at that time who guides me
              carefully through the selection of digital pianos available and I
              finally managed to find one that suits my son and costs very
              cheap!"
            </p>
          </div>
          <div className="testimony">
            <h4>David Joe - HighSchool 00X Band</h4>
            <p>"MUSIC SHOP IS THE BEST PLACE FOR YOUR MUSIC NEEDS!"</p>
          </div>
          <div className="testimony">
            <h4>Mrs. Cameron</h4>
            <p>
              "Amazing customer service! I once bought a new guitar from this
              place and noticed when I arrived back home that the back of the
              body was full of soft scratches. I went back to MUSIC SHOP asking
              replacement and they replaced my guitar in no time!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
