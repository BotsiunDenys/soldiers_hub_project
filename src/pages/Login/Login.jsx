import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../store/slices/AuthSlice";
import styles from "./Login.module.scss";

import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import account from "../../assets/svg/big-account.svg";
import heart from "../../assets/svg/heart.svg";
import { modes } from "react-transition-group/SwitchTransition";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const error = useSelector((state) => state.auth.error);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onBlur", reValidateMode: "onBlur" });

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  function handleFormSubmit(data) {
    dispatch(login(data));
  }

  return (
    <main className={styles.main}>
      <section className={styles.login}>
        <div className={styles.loginContainer}>
          <div className={styles.imgContainer}>
            <img src={account} />
          </div>
          <h2 className={styles.title}>Увійти</h2>
          <form className={styles.formContainer} onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Логін"
                className={`${styles.input} ${errors?.login && styles.inputError}`}
                {...register("login", {
                  required: "Поле обов'язкове до заповнення",
                  minLength: { value: 4, message: "Логін не може бути меншим за 4 символи" },
                  maxLength: { value: 20, message: "Логін не може бути більшим за 20 символів" },
                })}
              />
              <InputErrorMessage isWhite>{errors?.login?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                placeholder="Пароль"
                className={`${styles.input} ${errors?.password && styles.inputError}`}
                {...register("password", {
                  required: "Поле обов'язкове до заповнення",
                  minLength: { value: 4, message: "Пароль не може бути меншим за 4 символи" },
                  maxLength: { value: 20, message: "Пароль не може бути більшим за 20 символів" },
                })}
              />
              <InputErrorMessage isWhite>{errors?.password?.message}</InputErrorMessage>
            </div>
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
              isValid={isValid}
            />
          </form>
          <p className={styles.text}>
            Не маєте облікового запису?{" "}
            <Link className={styles.textLink} to="../registration">
              Зареєструйтеся тут
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
