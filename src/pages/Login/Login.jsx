import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/AuthSlice";
import styles from "./Login.module.scss";

import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import account from "../../assets/svg/big-account.svg";
import heart from "../../assets/svg/heart.svg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const error = useSelector((state) => state.auth.error);
  const [data, setData] = useState({ login: "", password: "" });

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(login(data));
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
            {/* <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={data.remember}
                onChange={(e) => {
                  handleCheckboxChange(e, "remember");
                }}
              />
              Запам'ятати мене
            </label> */}
            {error && <p className={styles.error}>{error}</p>}
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
