import ButtonGradient from "../ButtonGradient/ButtonGradient";
import styles from "./FeesCard.module.scss";
import feeActive from "../../assets/svg/donation-heart.svg";
import feeClosed from "../../assets/svg/heart.svg";
import test from "../../assets/test.jpg";

const FeesCard = ({ data, status, setModalVisible, setCurrentFee }) => {
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const convertedImgSrc = arrayBufferToBase64(data.imageSrc.data);

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
          <img src={data.imageSrc ? `data:image/jpg;base64,${convertedImgSrc}` : test} />
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
