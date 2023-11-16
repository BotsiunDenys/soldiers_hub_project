import styles from "./Registration.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

import account from "../../assets/svg/big-account.svg";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";

const Registration = () => {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className={styles.main}>
      <section className={styles.registration}>
        <div className={styles.registrationContainer}>
          <div className={styles.imgContainer}>
            <img src={account} />
          </div>
          <h2 className={styles.title}>Створити акаунт</h2>
          <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Логін" className={styles.input} />
            <input type="password" placeholder="Пароль" className={styles.input} />
            <input type="password" placeholder="Повторіть пароль" className={styles.input} />
            <ButtonGradient
              type="submit"
              img={heart}
              text="Зареєструватись"
              view={{ color: "#fff", fz: "30px", pading: "10px" }}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Registration;
