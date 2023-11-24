import ButtonGradient from "../ButtonGradient/ButtonGradient";
import styles from "./FeesCard.module.scss";
import feeActive from "../../assets/svg/donation-heart.svg";
import feeClosed from "../../assets/svg/heart.svg";
import test from "../../assets/test.jpg";
import FeesProgressBar from "../FeesProgressBar/FeesProgressBar";

const FeesCard = ({ title, text, filled, status }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <div
          className={
            status === "active"
              ? styles.imgContainer
              : status === "closed" && styles.imgContainerClosed
          }
        >
          <img src={test} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <FeesProgressBar filled={filled} />
      <ButtonGradient
        type="button"
        text={status === "closed" && "Переглянути звіт"}
        img={status === "active" ? feeActive : status === "closed" && feeClosed}
        view={{ pading: "10px 40px" }}
      />
    </div>
  );
};

export default FeesCard;
