import React from "react";
import styles from "./Defender.module.scss";
import img from "../../assets/defender.png";

const Defender = () => {
  return (
    <div className={styles.galleryItem}>
      <img src={img} alt="defender img" className={styles.galleryImg} />
      <h2 className={styles.galleryTitle}>Степан Дмитрович</h2>
    </div>
  );
};

export default Defender;
