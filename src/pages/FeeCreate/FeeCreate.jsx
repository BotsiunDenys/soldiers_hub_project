import { useState } from "react";
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

const options = [
  { value: "military", label: "Військовий" },
  { value: "volunteer", label: "Волонтерський" },
  { value: "rebuild", label: "На відбудову" },
];

const FeeCreate = () => {
  const selectStyles = {
    control: (styles, { menuIsOpen }) => ({
      ...styles,
      backgroundColor: "transparent",
      padding: "5px",
      fontSize: "20px",
      border: errors?.feeType?.message
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
  // const [data, setData] = useState({
  //   mail: "",
  //   feeType: "",
  //   feeName: "",
  //   feeDescription: "",
  //   requiredAmount: 0,
  //   credentials: "",
  //   image: "",
  // });
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.fees.loading);
  const error = useSelector((state) => state.fees.error);
  const [validationError, setValidationError] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const success = useSelector((state) => state.fees.creationSuccess);
  const handleFormSubmit = (data) => {
    console.log(data);
    // if (isLogged) {
    //   if (
    //     validateEmailRegex.test(data.mail) &&
    //     data.feeType &&
    //     data.feeName &&
    //     data.feeDescription.length <= 300 &&
    //     data.feeDescription &&
    //     data.requiredAmount &&
    //     data.credentials &&
    //     date !== new Date()
    //   ) {
    //     const application = {
    //       email: data.mail,
    //       type: data.feeType,
    //       name: data.feeName,
    //       description: data.feeDescription,
    //       sum: data.requiredAmount,
    //       requisite: data.credentials,
    //       finish: date,
    //       isAccepted: false,
    //       image: data.image,
    //     };
    //     dispatch(createApplication(application));
    //     setValidationError(false);
    //     setData({
    //       mail: "",
    //       feeType: "",
    //       feeName: "",
    //       feeDescription: "",
    //       requiredAmount: 0,
    //       credentials: "",
    //       image: "",
    //     });
    //   } else {
    //     setValidationError(true);
    //   }
    // } else {
    //   navigate("/login");
    // }
  };

  const handleDateChange = (dateValue) => {
    const year = String(dateValue.getFullYear());
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    setDate(`${day}/${month}/${year}`);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = useForm({ mode: "onBlur", defaultValues: { feeName: "", feeType: "" } });

  // console.log("asd");

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
                  className={`${styles.input} ${errors?.mail && styles.inputError}`}
                  {...register("mail", {
                    required: "Поле обов'язкове до заповнення",
                    minLength: { value: 8, message: "E-mail повинен бути більше 8 символів" },
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Перевірте правильність введеного e-mail",
                    },
                  })}
                />
              </label>
              <InputErrorMessage>{errors?.mail?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Тип збору
                <Controller
                  control={control}
                  name="feeType"
                  rules={{ required: "Виберіть тип збору" }}
                  render={({ field: { name, ref, onChange, onBlur, value } }) => (
                    <>
                      <Select
                        ref={ref}
                        name={name}
                        options={options}
                        value={options.find((el) => el.value === value)}
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
              <InputErrorMessage>{errors?.feeType?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Назва збору
                <input
                  type="text"
                  placeholder="Введіть назву збору"
                  className={`${styles.input} ${errors?.feeName && styles.inputError}`}
                  {...register("feeName", { required: "Поле обов'язкове до заповнення" })}
                />
              </label>
              <InputErrorMessage>{errors?.feeName?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Опис збору до 300 символів
                <textarea
                  placeholder="Введіть опис збору"
                  className={`${styles.input} ${errors?.feeDescription && styles.inputError}`}
                  {...register("feeDescription", { required: "Поле обов'язкове до заповнення" })}
                />
              </label>
              <InputErrorMessage>{errors?.feeDescription?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Необхідна сума збору
                <input
                  type="number"
                  placeholder="Введіть суму збору(ціле число)"
                  className={`${styles.input} ${errors?.requiredAmount && styles.inputError}`}
                  {...register("requiredAmount", {
                    required: "Поле обов'язкове до заповнення",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Перевірте правильність введених даних, допустимі числа [0-9].",
                    },
                  })}
                />
              </label>
              <InputErrorMessage>{errors?.requiredAmount?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Реквізити
                <input
                  type="text"
                  placeholder="Введіть номер банківської картки"
                  className={`${styles.input} ${errors?.credentials && styles.inputError}`}
                  {...register("credentials", { required: "Поле обов'язкове до заповнення" })}
                />
              </label>
              <InputErrorMessage>{errors?.credentials?.message}</InputErrorMessage>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Кінець збору
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { value, onChange } }) => (
                    <DatePicker onChange={onChange} value={value} />
                  )}
                />
                {/* <DatePicker dateHandle={handleDateChange} /> */}
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Фото збору
                <input
                  type="text"
                  className={`${styles.input} ${errors?.image && styles.inputError}`}
                  placeholder="Посилання на фото"
                  {...register("image", { required: "Поле обов'язкове до заповнення" })}
                />
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

export default FeeCreate;

// const FeeCreate = () => {
//   const [data, setData] = useState({
//     mail: "",
//     feeType: "",
//     feeName: "",
//     feeDescription: "",
//     requiredAmount: 0,
//     credentials: "",
//     image: "",
//   });
//   const [date, setDate] = useState(new Date());
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const loading = useSelector((state) => state.fees.loading);
//   const error = useSelector((state) => state.fees.error);
//   const [validationError, setValidationError] = useState(false);
//   const isLogged = useSelector((state) => state.auth.isLogged);
//   const success = useSelector((state) => state.fees.creationSuccess);
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (isLogged) {
//       if (
//         validateEmailRegex.test(data.mail) &&
//         data.feeType &&
//         data.feeName &&
//         data.feeDescription.length <= 300 &&
//         data.feeDescription &&
//         data.requiredAmount &&
//         data.credentials &&
//         date !== new Date()
//       ) {
//         const application = {
//           email: data.mail,
//           type: data.feeType,
//           name: data.feeName,
//           description: data.feeDescription,
//           sum: data.requiredAmount,
//           requisite: data.credentials,
//           finish: date,
//           isAccepted: false,
//           image: data.image,
//         };
//         dispatch(createApplication(application));
//         setValidationError(false);
//         setData({
//           mail: "",
//           feeType: "",
//           feeName: "",
//           feeDescription: "",
//           requiredAmount: 0,
//           credentials: "",
//           image: "",
//         });
//       } else {
//         setValidationError(true);
//       }
//     } else {
//       navigate("/login");
//     }
//   };

//   function handleInputChange(e, name) {
//     setData({ ...data, [name]: e.target.value });
//   }

//   const handleSelectChange = (selectedOption) => {
//     setData({ ...data, feeType: selectedOption.label });
//   };

//   const handleDateChange = (dateValue) => {
//     const year = String(dateValue.getFullYear());
//     const month = String(dateValue.getMonth() + 1).padStart(2, "0");
//     const day = String(dateValue.getDate()).padStart(2, "0");
//     setDate(`${day}/${month}/${year}`);
//   };

//   const {
//     register,
//     formState: { errors, isValid },
//     handleSubmit,
//     reset,
//   } = useForm({ mode: "onBlur" });

//   return (
//     <main className={styles.main}>
//       <Intro>
//         <h2 className={styles.introTitle}>Форма для створення благодійного збору</h2>
//         <p className={styles.introSubtitle}>
//           Після заповнення даної форми, ваш запит розглянуть технічні спеціалісти.Розгляд заяви
//           триватиме протягом 1-2 днів, після чого буде опублікований у відповідному розділі.
//         </p>
//       </Intro>
//       <section className={styles.createFee}>
//         <div className={styles.createFeeContainer}>
//           <form className={styles.formContainer} onSubmit={handleFormSubmit}>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 E-mail
//                 <input
//                   type="email"
//                   placeholder="Введіть e-mail"
//                   className={styles.input}
//                   value={data.mail}
//                   onChange={(e) => {
//                     handleInputChange(e, "mail");
//                   }}
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 Тип збору
//                 <Select
//                   options={options}
//                   value={options.find((option) => option.value === data.feeType)}
//                   onChange={handleSelectChange}
//                   styles={selectStyles}
//                   placeholder="Виберіть тип збору"
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 Назва збору
//                 <input
//                   type="text"
//                   placeholder="Введіть назву збору"
//                   className={styles.input}
//                   value={data.feeName}
//                   onChange={(e) => {
//                     handleInputChange(e, "feeName");
//                   }}
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 Опис збору до 300 символів
//                 <textarea
//                   placeholder="Введіть опис збору"
//                   className={styles.text}
//                   value={data.feeDescription}
//                   onChange={(e) => {
//                     handleInputChange(e, "feeDescription");
//                   }}
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 Необхідна сума збору
//                 <input
//                   type="number"
//                   placeholder="Введіть суму збору(ціле число)"
//                   className={styles.input}
//                   value={data.requiredAmount}
//                   onChange={(e) => {
//                     handleInputChange(e, "requiredAmount");
//                   }}
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>
//                 Реквізити
//                 <input
//                   type="text"
//                   placeholder="Введіть номер банківської картки"
//                   className={styles.input}
//                   value={data.credentials}
//                   onChange={(e) => {
//                     handleInputChange(e, "credentials");
//                   }}
//                 />
//               </label>
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label}>Кінець збору</label>
//               <DatePicker dateHandle={handleDateChange} />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="filePicker" className={styles.label}>
//                 Фото збору
//                 <input
//                   type="text"
//                   className={styles.input}
//                   placeholder="Посилання на фото"
//                   name="filePicker"
//                   id="filePicker"
//                   onChange={(e) => {
//                     handleInputChange(e, "image");
//                   }}
//                 />
//               </label>
//             </div>
//             {error && <p className={styles.error}>Сталась помилка. Спробуйте пізніше!</p>}
//             {validationError && <p className={styles.error}>Заповніть усі поля!</p>}
//             {success && (
//               <p className={styles.success}>Вашу заявку на створення збору успішно надіслано!</p>
//             )}
//             {loading && <Loader />}
//             <ButtonGradient
//               type="submit"
//               img={img}
//               text="Створити збір"
//               view={{ pading: "10px 30px" }}
//             />
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };
