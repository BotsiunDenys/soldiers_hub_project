import styles from "./Home.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

import donation from "../../assets/svg/donation-img.svg";
import intro from "../../assets/intro-img.jpg";
import heart from "../../assets/svg/heart.svg";

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>Разом до перемоги!</h1>
            <p className={styles.introSubtitle}>
              Наші військові - справжні герої, вони віддають своє життя та здоров'я, щоб захистити
              нашу незалежність та забезпечити нам безпеку. Домопожімо нашим воїнам та покажімо, як
              ми їх цінуємо. Разом ми сила!
            </p>
            <ButtonGradient img={heart} />
            <div className={styles.introContentImage}>
              <img src={donation} />
            </div>
          </div>
          <div className={styles.introImage}>
            <img src={intro} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
