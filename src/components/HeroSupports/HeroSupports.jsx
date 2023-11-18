import styles from "./HeroSupports.module.scss";
import bigHeart from "../../assets/svg/heart-big.svg";
import heart from "../../assets/svg/heart.svg";
import ButtonGradient from "../ButtonGradient/ButtonGradient";

const HeroSupports = () => {
  return (
    <section className={styles.support}>
      <div className={styles.supportContainer}>
        <div className={styles.textContainer}>
          <span className={styles.text}>Підтримай</span>
          <span className={styles.text}>Наших</span>
          <span>
            <img src={bigHeart} alt="big heart img" />
          </span>
          <span className={styles.text}>Героїв</span>
        </div>
        <ButtonGradient img={heart} view={{ fz: "40px" }} />
      </div>
    </section>
  );
};

export default HeroSupports;
