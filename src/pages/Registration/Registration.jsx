import styles from "./Registration.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";

import account from "../../assets/svg/big-account.svg";
import { Link } from "react-router-dom";
import heart from "../../assets/svg/heart.svg";
import { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({ username: "", password: "", repeatPassword: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
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
            <input
              type="password"
              placeholder="Повторіть пароль"
              className={styles.input}
              value={data.repeatPassword}
              onChange={(e) => {
                handleInputChange(e, "repeatPassword");
              }}
            />
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
