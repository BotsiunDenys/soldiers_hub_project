import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import styles from "./FeeCreate.module.scss";
import Intro from "../../components/Intro/Intro";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import Loader from "../../components/Loader/Loader";
import img from "../../assets/svg/heart.svg";
import { createApplication } from "../../store/slices/FeeSlice";
import DatePicker from "../../components/DatePicker/DatePicker";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import { FaUpload, FaCheck } from "react-icons/fa6";
import { options } from "./FeeCreate";

export const FeeCreate = () => {
  const selectStyles = {
    control: (styles, { menuIsOpen }) => ({
      ...styles,
      backgroundColor: "transparent",
      padding: "5px",
      fontSize: "20px",
      border: errors?.type?.message
        ? "2px solid #bf1643"
        : menuIsOpen
        ? "2px solid hsl(0, 0%, 70%)"
        : "2px solid black",
      borderRadius: "8px",
      transition: "all 0.2s ease-in-out",
      boxShadow: "none",
      "&:hover": {
        borderColor: `hsl(0, 0%, 70%)`,
      },
      "&:focus": {
        borderColor: `hsl(0, 0%, 70%)`,
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: "#f0f0f0",
      borderRadius: "5px",
      boxShadow: "0px 0px 0px 1.5px hsl(0, 0%, 70%),0px 0px 10px 1px hsl(0, 0%, 70%)",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isFocused ? "hsl(0, 0%, 85%)" : isSelected && "hsl(0, 0%, 70%)",
    }),
  };

  const regex = /^[a-zA-Z0-9._%+-]+@donnu\.edu\.ua$/;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.fees.loading);
  const error = useSelector((state) => state.fees.error);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const success = useSelector((state) => state.fees.creationSuccess);

  const handleFormSubmit = async (data) => {
    if (isLogged) {
      // const application = {
      //   ...data,
      //   date: Date.parse(data.finish),
      //   isAccepted: false,
      //   feeByDonnu: regex.test(data.email),
      //   // image: await convertToBase64(data.image[0]),
      // };
      const application = new FormData();
      application.append("image", data.image[0]);
      application.append("isAccepted", false);
      application.append("feeByDonnu", regex.test(data.email));
      application.append("date", Date.parse(data.finish));
      Object.keys(data).forEach((el) => {
        application.append(el, data[el]);
      });

      dispatch(createApplication(application));
      // reset();
    } else {
      navigate("/login");
    }
    // reset();
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
    getValues,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  console.log(getValues("image"));

  return (
    <main className={styles.main}>
      <Intro>
        <h2 className={styles.introTitle}>Форма для створення благодійного збору</h2>
        <p className={styles.introSubtitle}>
          Після заповнення даної форми, ваш запит розглянуть технічні спеціалісти.Розгляд заяви
          триватиме протягом 1-2 днів, після чого буде опублікований у відповідному розділі.
        </p>
      </Intro>
      <section className={styles.createFee}>
        <div className={styles.createFeeContainer}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(handleFormSubmit)}
            noValidate
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>
                E-mail
                <input
                  type="email"
                  placeholder="Введіть e-mail"
                  className={`${styles.input} ${errors?.email && styles.inputError}`}
                  {...register("email", {
                    required: "Поле обов'язкове до заповнення",
                    minLength: { value: 8, message: "E-mail повинен бути більше 8 символів" },
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Перевірте правильність введеного e-mail",
                    },
                  })}
                />
              </label>
              <InputErrorMessage>{errors?.email?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Тип збору
                <Controller
                  control={control}
                  name="type"
                  rules={{ required: "Виберіть тип збору" }}
                  render={({ field: { name, ref, onChange, onBlur, value } }) => (
                    <>
                      <Select
                        ref={ref}
                        name={name}
                        options={options}
                        value={value && options.find((el) => el.value === value)}
                        onBlur={onBlur}
                        onChange={(el) => {
                          onChange(el.value);
                        }}
                        styles={selectStyles}
                        placeholder="Виберіть тип збору"
                      />
                    </>
                  )}
                />
              </label>
              <InputErrorMessage>{errors?.type?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Назва збору
                <input
                  type="text"
                  placeholder="Введіть назву збору"
                  className={`${styles.input} ${errors?.name && styles.inputError}`}
                  {...register("name", { required: "Поле обов'язкове до заповнення" })}
                />
              </label>
              <InputErrorMessage>{errors?.name?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Опис збору до 300 символів
                <textarea
                  placeholder="Введіть опис збору"
                  className={`${styles.input} ${errors?.description && styles.inputError}`}
                  {...register("description", { required: "Поле обов'язкове до заповнення" })}
                />
              </label>
              <InputErrorMessage>{errors?.description?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Необхідна сума збору
                <input
                  type="number"
                  placeholder="Введіть суму збору(ціле число)"
                  className={`${styles.input} ${errors?.sum && styles.inputError}`}
                  {...register("sum", {
                    required: "Поле обов'язкове до заповнення",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Перевірте правильність введених даних, допустимі числа [0-9].",
                    },
                  })}
                />
              </label>
              <InputErrorMessage>{errors?.sum?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Реквізити
                <input
                  type="text"
                  placeholder="Введіть посилання на банку(монобанк)"
                  className={`${styles.input} ${errors?.requisite && styles.inputError}`}
                  {...register("requisite", {
                    required: "Поле обов'язкове до заповнення",
                    pattern: {
                      value: /^https:\/\/send\.monobank\.ua\/jar\/.*$/,
                      message: "Ви повинні вказати URL-посилання на банку",
                    },
                    // validate: async (value) => {
                    //   const regex = /^https:\/\/send\.monobank\.ua\/jar\/.*$/;
                    //   if (regex.test(value)) {
                    //     const response = await fetch(value);
                    //     return response.status == 200 || "Перевірте правильність введених даних";
                    //   }
                    //   return "Ви повинні вказати URL-посилання на банку";
                    // },
                  })}
                />
              </label>
              <InputErrorMessage>{errors?.requisite?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Кінець збору
                <Controller
                  control={control}
                  name="finish"
                  rules={{ required: "Вкажіть дату закінчення збору" }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <DatePicker
                      onChange={onChange}
                      value={value}
                      onBlur={onBlur}
                      isValid={!!errors?.finish}
                    />
                  )}
                />
              </label>
              <InputErrorMessage>{errors?.finish?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Фото збору
                <div className={`${styles.upload} ${errors?.image && styles.inputError}`}>
                  {/* {getValues("image") ? "image yes" : "no"} */}
                  <FaUpload />
                  <FaCheck />
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", {
                      required: "Виберіть фото для збору",
                    })}
                  />
                </div>
              </label>
              <InputErrorMessage>{errors?.image?.message}</InputErrorMessage>
            </div>
            {error && <p className={styles.error}>Сталась помилка. Спробуйте пізніше!</p>}
            {success && (
              <p className={styles.success}>Вашу заявку на створення збору успішно надіслано!</p>
            )}
            {loading && <Loader />}
            <ButtonGradient
              type="submit"
              img={img}
              text="Створити збір"
              view={{ pading: "10px 30px" }}
              isValid={isValid}
            />
          </form>
        </div>
      </section>
    </main>
  );
};
