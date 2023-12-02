import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(styles);
  return (
    <div className={styles.navbar}>
      <nav className="container">
        <Link className={styles.logo} to="/">
          <img src={logo} />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
        <div
          className={styles["menu-button"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenuSharp />
        </div>
      </nav>
      <div
        className={`${styles["menu-mobile"]}${
          isOpen ? " " + styles.active : ""
        }`}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
