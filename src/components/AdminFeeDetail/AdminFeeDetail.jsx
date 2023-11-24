import ButtonGradient from "../ButtonGradient/ButtonGradient";
import styles from "./AdminFeeDetail.module.scss";

const AdminFeeDetail = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.image} src={data.image} alt={`${data.name} image`} />
        <strong className={styles.name}>{data.name}</strong>
        <p className={styles.description}>{data.description}</p>
        <strong className={styles.sum}>
          Необхідна сума: <span className={styles.text}>{data.sum}</span>
        </strong>
      </div>
      <div className={styles.info}>
        <div className={styles.textContent}>
          <p className={styles.label}>
            Користувач: <span className={styles.text}>{data.username}</span>
          </p>
          <p className={styles.label}>
            Тип збору: <span className={styles.text}>{data.feeType}</span>
          </p>
          <p className={styles.label}>
            Email: <span className={styles.text}>{data.email}</span>
          </p>
          <p className={styles.label}>
            Тривалість збору: <span className={styles.text}>{data.date}</span>
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <ButtonGradient type="button" text="Підтвердити" />
          <ButtonGradient type="button" text="Відмовити" />
        </div>
      </div>
    </div>
  );
};

export default AdminFeeDetail;
