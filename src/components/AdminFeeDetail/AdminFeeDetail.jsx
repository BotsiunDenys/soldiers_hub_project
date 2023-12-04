import { useDispatch } from "react-redux";
import ButtonGradient from "../ButtonGradient/ButtonGradient";
import { acceptApplication, refuseApplication } from "../../store/slices/FeeSlice";
import img from "../../assets/fees-img.jpg";
import styles from "./AdminFeeDetail.module.scss";

const AdminFeeDetail = ({ data }) => {
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(acceptApplication(data._id));
  };

  const handleRefuse = () => {
    dispatch(refuseApplication(data._id));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {data.image ? (
          <img className={styles.image} src={data.image} alt={`${data.name} image`} />
        ) : (
          <img className={styles.image} src={img} alt={`${data.name} image`} />
        )}
        <strong className={styles.name}>{data.name}</strong>
        <p className={styles.description}>{data.description}</p>
        <strong className={styles.sum}>
          Необхідна сума: <span className={styles.text}>{data.sum}</span>
        </strong>
      </div>
      <div className={styles.info}>
        <div className={styles.textContent}>
          <p className={styles.label}>
            Тип збору: <span className={styles.text}>{data.type}</span>
          </p>
          <p className={styles.label}>
            Email: <span className={styles.text}>{data.email}</span>
          </p>
          <p className={styles.label}>
            Дата завершення: <span className={styles.text}>{data.finish}</span>
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <ButtonGradient onClick={handleAccept} type="button" text="Підтвердити" />
          <ButtonGradient onClick={handleRefuse} type="button" text="Відмовити" />
        </div>
      </div>
    </div>
  );
};

export default AdminFeeDetail;
