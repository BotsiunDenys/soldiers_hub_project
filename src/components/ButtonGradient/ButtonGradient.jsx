import { Link } from "react-router-dom";
import styles from "./ButtonGradient.module.scss";

const ButtonGradient = ({ button, onClick, text, img, view }) => {
  return button ? (
    <button
      style={{ fontSize: view?.fz, padding: view?.pading }}
      className={styles.button}
      onClick={onClick}
    >
      {!text ? "Підтримати" : text}
      <img src={img} />
    </button>
  ) : (
    <Link style={{ fontSize: view?.fz, padding: view?.pading }} className={styles.button} to="fees">
      {!text ? "Підтримати" : text}
      <img src={img} style={view?.fz ? { height: "43px" } : null} />
    </Link>
  );
};

export default ButtonGradient;
