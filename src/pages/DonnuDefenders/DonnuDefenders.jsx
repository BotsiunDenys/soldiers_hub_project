import React from "react";
import styles from "./DonnuDefenders.module.scss";
import Defender from "../../components/Defender/Defender";

const DonnuDefenders = () => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Захисники ДонНУ</h1>
            <div className={styles.galleryWrapper}>
              <Defender />
              <Defender />
              <Defender />
              <Defender />
              <Defender />
              <Defender />
              <Defender />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonnuDefenders;
