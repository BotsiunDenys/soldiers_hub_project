import styles from "./Login.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

import account from "../../assets/svg/big-account.svg";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";

const Login = () => {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className={styles.main}>
      <section className={styles.login}>
        <div className={styles.loginContainer}>
          <div className={styles.imgContainer}>
            <img src={account} />
          </div>
          <h2 className={styles.title}>Увійти</h2>
          <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Логін" className={styles.input} />
            <input type="password" placeholder="Пароль" className={styles.input} />
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              Запам'ятати мене
            </label>
            <ButtonGradient
              type="submit"
              img={heart}
              text="Вхід"
              view={{ color: "#fff", fz: "30px", w: "227px", pading: "10px" }}
            />
          </form>
          <p className={styles.text}>
            Не маєте облікового запису? <Link to="../registration">Зареєструйтеся тут</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
