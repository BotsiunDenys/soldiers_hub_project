import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../store/slices/AuthSlice";
import { useForm } from "react-hook-form";

import styles from "./Registration.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import account from "../../assets/svg/big-account.svg";
import heart from "../../assets/svg/heart.svg";

const Registration = () => {
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
    const changedData = { login: data.login, password: data.password, isAdmin: false };
    dispatch(registration(changedData));
  }

  return (
    <main className={styles.main}>
      <section className={styles.registration}>
        <div className={styles.registrationContainer}>
          <div className={styles.imgContainer}>
            <img src={account} />
          </div>
          <h2 className={styles.title}>Створити акаунт</h2>
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
                className={`${styles.input} ${
                  (errors?.password || errors?.repeatPassword?.type === "validate") &&
                  styles.inputError
                }`}
                {...register("password", {
                  required: "Поле обов'язкове до заповнення",
                  minLength: { value: 4, message: "Пароль не може бути меншим за 4 символи" },
                  maxLength: { value: 20, message: "Пароль не може бути більшим за 20 символів" },
                })}
              />
              <InputErrorMessage isWhite>{errors?.password?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                placeholder="Повторіть пароль"
                className={`${styles.input} ${errors?.repeatPassword && styles.inputError}`}
                {...register("repeatPassword", {
                  required: "Поле обов'язкове до заповнення",
                  validate: (value, formValues) => {
                    return value === formValues.password || "Паролі не співпадають";
                  },
                })}
              />
              <InputErrorMessage isWhite>{errors?.repeatPassword?.message}</InputErrorMessage>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <ButtonGradient
              type="submit"
              img={heart}
              text="Зареєструватись"
              view={{ color: "#fff", fz: "30px", pading: "10px" }}
              isValid={isValid}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default Registration;
