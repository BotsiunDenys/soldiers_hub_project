import { Link } from "react-router-dom";
import styles from "./ButtonGradient.module.scss";

const ButtonGradient = ({ type, onClick, text, img, view, link, isValid }) => {
  return type ? (
    type == "button" ? (
      <button
        style={{ fontSize: view?.fz, padding: view?.pading }}
        className={styles.button}
        onClick={onClick}
      >
        {!text ? "Підтримати" : text}
        <img src={img} />
      </button>
    ) : (
      <button
        style={{
          fontSize: view?.fz,
          padding: view?.pading,
          color: view?.color,
          minWidth: view?.w,
        }}
        className={styles.button}
        type="submit"
        disabled={!isValid}
      >
        {!text ? "Підтримати" : text}
        <img src={img} />
      </button>
    )
  ) : (
    <Link
      style={{ fontSize: view?.fz, padding: view?.pading }}
      className={styles.button}
      to={!!link ? link : "/fees"}
    >
      {!text ? "Підтримати" : text}
      <img src={img} style={view?.fz ? { height: "43px" } : null} />
    </Link>
  );
};

export default ButtonGradient;
