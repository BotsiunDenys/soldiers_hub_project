import ButtonGradient from "../ButtonGradient/ButtonGradient";
import styles from "./FeesCard.module.scss";
import feeActive from "../../assets/svg/donation-heart.svg";
import feeClosed from "../../assets/svg/heart.svg";
import test from "../../assets/test.jpg";

const FeesCard = ({ data, status, setModalVisible, setCurrentFee }) => {
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
          <img src={data.image ? data.image : test} />
        </div>
        <h3 className={styles.title}>{data.name}</h3>
        <p className={styles.text}>{data.description}</p>
      </div>
      <p>Сума збору: {data.sum} грн</p>

      {status === "active" && (
        <ButtonGradient
          type="button"
          text={status === "closed" && "Переглянути звіт"}
          img={status === "active" ? feeActive : status === "closed" && feeClosed}
          view={{ pading: "10px 40px" }}
          onClick={() => {
            setCurrentFee(data);
            setModalVisible(true);
          }}
        />
      )}
    </div>
  );
};

export default FeesCard;
