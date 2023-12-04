import ButtonGradient from "../ButtonGradient/ButtonGradient";
import styles from "./FeesCard.module.scss";
import feeActive from "../../assets/svg/donation-heart.svg";
import feeClosed from "../../assets/svg/heart.svg";
import test from "../../assets/test.jpg";
import FeesProgressBar from "../FeesProgressBar/FeesProgressBar";

const FeesCard = ({ title, text, sum, status, img }) => {
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
          <img src={img ? img : test} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <p>Сума збору: {sum} грн</p>

      {status === "active" && (
        <ButtonGradient
          type="button"
          text={status === "closed" && "Переглянути звіт"}
          img={status === "active" ? feeActive : status === "closed" && feeClosed}
          view={{ pading: "10px 40px" }}
        />
      )}
    </div>
  );
};

export default FeesCard;
