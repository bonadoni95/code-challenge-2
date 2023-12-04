import React from "react";
import styles from "../styles/hero.module.scss";
import bg from "../assets/image/musicstore2.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={bg} />
      <div className={styles["content-hero"]}>
        {/* <h2>ALWAYS STRVING FOR SUCCESS!</h2>
        <p className={styles["overview"]}>
          BRIEF OVERVIEW: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis ducimus amet molestiae voluptas veniam deserunt
          suscipit consequuntur, eaque facilis, nulla vero libero ut. Iure, cum
          mollitia labore aperiam magnam aliquid?
        </p>
        <p className={styles["mission"]}>
          MISSION STATEMENT: Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Nulla in doloremque quae hic soluta odit sequi assumenda atque
          facilis veniam voluptate totam accusantium ad, et, sint repellendus
          eveniet ex dolor.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
