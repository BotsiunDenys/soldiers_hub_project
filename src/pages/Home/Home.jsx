import styles from "./Home.module.scss";
import donation from "../../assets/svg/donation-img.svg";
import intro from "../../assets/intro-img.png";

const Home = () => {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <h1 className={styles.introTitle}>Разом до перемоги!</h1>
            <p className={styles.introSubtitle}>
              Наші військові - справжні герої, вони віддають своє життя та здоров'я, щоб захистити
              нашу незалежність та забезпечити нам безпеку. Домопожімо нашим воїнам та покажімо, як
              ми їх цінуємо. Разом ми сила!
            </p>
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
