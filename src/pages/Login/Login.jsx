import styles from "./Login.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

import account from "../../assets/svg/big-account.svg";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "", remember: false });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  function handleCheckboxChange(e, name) {
    setData({ ...data, [name]: e.target.checked });
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
            <input
              type="text"
              placeholder="Логін"
              className={styles.input}
              value={data.username}
              onChange={(e) => {
                handleInputChange(e, "username");
              }}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles.input}
              value={data.password}
              onChange={(e) => {
                handleInputChange(e, "password");
              }}
            />
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={data.remember}
                onChange={(e) => {
                  handleCheckboxChange(e, "remember");
                }}
              />
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
