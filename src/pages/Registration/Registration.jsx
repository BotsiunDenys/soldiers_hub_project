import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration, setError } from "../../store/slices/AuthSlice";

import styles from "./Registration.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import account from "../../assets/svg/big-account.svg";
import heart from "../../assets/svg/heart.svg";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const error = useSelector((state) => state.auth.error);
  const [data, setData] = useState({ login: "", password: "", repeatPassword: "", isAdmin: false });

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (data.password === data.repeatPassword) {
      dispatch(registration(data));
    } else {
      dispatch(setError("Поле 'Пароль' та 'Повторіть пароль' не співпадають"));
    }
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
              value={data.login}
              required
              minLength={4}
              maxLength={20}
              onChange={(e) => {
                handleInputChange(e, "login");
              }}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles.input}
              value={data.password}
              required
              minLength={4}
              maxLength={20}
              onChange={(e) => {
                handleInputChange(e, "password");
              }}
            />
            <input
              type="password"
              placeholder="Повторіть пароль"
              className={styles.input}
              value={data.repeatPassword}
              required
              minLength={4}
              maxLength={20}
              onChange={(e) => {
                handleInputChange(e, "repeatPassword");
              }}
            />
            {error && <p className={styles.error}>{error}</p>}
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
