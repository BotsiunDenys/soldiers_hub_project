import styles from "./FeesProgressBar.module.scss";

const FeesProgressBar = ({ filled }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarFill} style={{ width: `${filled}%` }}></div>
    </div>
  );
};

export default FeesProgressBar;
