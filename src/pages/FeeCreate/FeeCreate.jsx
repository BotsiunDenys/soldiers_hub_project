import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Intro from "../../components/Intro/Intro";
import styles from "./FeeCreate.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import Loader from "../../components/Loader/Loader";

import img from "../../assets/svg/heart.svg";
import { createApplication } from "../../store/slices/FeeSlice";
import { useNavigate } from "react-router-dom";
import DatePicker from "../../components/DatePicker/DatePicker";

const options = [
  { value: "military", label: "Військовий" },
  { value: "volunteer", label: "Волонтерський" },
  { value: "rebuild", label: "На відбудову" },
];

const validateEmailRegex = /^\S+@\S+\.\S+$/;

const selectStyles = {
  control: (styles, { menuIsOpen }) => ({
    ...styles,
    backgroundColor: "transparent",
    padding: "5px",
    fontSize: "20px",
    border: menuIsOpen ? "2px solid hsl(0, 0%, 70%)" : "2px solid black",
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

const FeeCreate = () => {
  const [data, setData] = useState({
    mail: "",
    feeType: "",
    feeName: "",
    feeDescription: "",
    requiredAmount: 0,
    credentials: "",
    image: "",
  });
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.fees.loading);
  const error = useSelector((state) => state.fees.error);
  const isLogged = useSelector((state) => state.auth.isLogged);
  console.log(error);
  function handleFormSubmit(event) {
    event.preventDefault();
    if (isLogged) {
      if (
        validateEmailRegex.test(data.mail) &&
        data.feeType &&
        data.feeName &&
        data.feeDescription.length <= 300 &&
        data.feeDescription &&
        data.requiredAmount &&
        data.credentials &&
        date !== new Date()
      ) {
        const application = {
          email: data.mail,
          type: data.feeType,
          name: data.feeName,
          description: data.feeDescription,
          sum: data.requiredAmount,
          requisite: data.credentials,
          finish: date,
          isAccepted: false,
          image: data.image,
        };
        const send = async () => {
          await dispatch(createApplication(application));
          if (!error) {
            setData({
              mail: "",
              feeType: "",
              feeName: "",
              feeDescription: "",
              requiredAmount: 0,
              credentials: "",
              image: "",
            });
          }
        };
        send();
      }
    } else {
      navigate("/login");
    }
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  const handleSelectChange = (selectedOption) => {
    setData({ ...data, feeType: selectedOption.label });
  };

  const handleDateChange = (dateValue) => {
    const year = String(dateValue.getFullYear());
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    setDate(`${day}/${month}/${year}`);
  };

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
          <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                E-mail
                <input
                  type="email"
                  placeholder="Введіть e-mail"
                  className={styles.input}
                  value={data.mail}
                  onChange={(e) => {
                    handleInputChange(e, "mail");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Тип збору
                <Select
                  options={options}
                  value={options.find((option) => option.value === data.feeType)}
                  onChange={handleSelectChange}
                  styles={selectStyles}
                  placeholder="Виберіть тип збору"
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Назва збору
                <input
                  type="text"
                  placeholder="Введіть назву збору"
                  className={styles.input}
                  value={data.feeName}
                  onChange={(e) => {
                    handleInputChange(e, "feeName");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Опис збору до 300 символів
                <textarea
                  placeholder="Введіть опис збору"
                  className={styles.text}
                  value={data.feeDescription}
                  onChange={(e) => {
                    handleInputChange(e, "feeDescription");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Необхідна сума збору
                <input
                  type="number"
                  placeholder="Введіть суму збору(ціле число)"
                  className={styles.input}
                  value={data.requiredAmount}
                  onChange={(e) => {
                    handleInputChange(e, "requiredAmount");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Реквізити
                <input
                  type="text"
                  placeholder="Введіть номер банківської картки"
                  className={styles.input}
                  value={data.credentials}
                  onChange={(e) => {
                    handleInputChange(e, "credentials");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Кінець збору</label>
              <DatePicker dateHandle={handleDateChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="filePicker" className={styles.label}>
                Фото збору
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Посилання на фото"
                  name="filePicker"
                  id="filePicker"
                  onChange={(e) => {
                    handleInputChange(e, "image");
                  }}
                />
              </label>
            </div>
            {error && <p className={styles.error}>Сталась помилка. Спробуйте пізніше!</p>}
            {loading && <Loader />}
            <ButtonGradient
              type="submit"
              img={img}
              text="Створити збір"
              view={{ pading: "10px 30px" }}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default FeeCreate;
