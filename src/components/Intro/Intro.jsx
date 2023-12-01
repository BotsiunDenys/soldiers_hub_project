import styles from "./Intro.module.scss";

const Intro = ({ children }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>{children}</div>
    </section>
  );
};

export default Intro;
