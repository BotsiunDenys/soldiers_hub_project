import { useState } from "react";
import Intro from "../../components/Intro/Intro";
import styles from "./Contacts.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import heart from "../../assets/svg/heart.svg";

export const chat = "-1002084576911";
export const id = "6912824537:AAHjw06OoPXDynn6JbPjMtkaYNfnP2AZQw0";
const validateEmailRegex = /^\S+@\S+\.\S+$/;

const Contacts = () => {
  const [data, setData] = useState({
    fullName: "",
    mail: "",
    topic: "",
    problemType: [],
    problemDescription: "",
  });
  const [formResult, setFormResult] = useState({
    text: "",
    error: false,
    nameError: false,
    mailError: false,
    descriptionError: false,
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      data.fullName.length &&
      validateEmailRegex.test(data.mail) &&
      data.problemDescription.length
    ) {
      fetch(`https://api.telegram.org/bot${id}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `Ім'я: ${data.fullName}\nEmail: ${data.mail}\nОпис: ${data.problemDescription}\n${
            data.topic ? `Тема: ${data.topic}\n` : ""
          }${data.problemType.length ? `Тип проблеми: ${data.problemType}` : ""}`,
          chat_id: chat,
        }),
      })
        .then((response) => {
          if (response.ok) {
            handleClearForm({ text: "Ваша заявка надіслана. Дякую за звернення!", error: false });
          } else {
            handleClearForm({
              text: "Помилка відправлення. Спробуйте пізніше.",
              error: true,
              nameError: false,
              mailError: false,
              descriptionError: false,
            });
          }
        })
        .catch(() => {
          handleClearForm({
            text: "Помилка відправлення. Спробуйте пізніше.",
            error: true,
            nameError: false,
            mailError: false,
            descriptionError: false,
          });
        });
    } else {
      if (!data.fullName.length) {
        setFormResult({
          text: "Поле ім'я не може бути пустим.",
          error: true,
          nameError: true,
          mailError: false,
          descriptionError: false,
        });
      } else if (!validateEmailRegex.test(data.mail)) {
        setFormResult({
          text: "Введіть валідну поштову адресу.",
          error: true,
          nameError: false,
          mailError: true,
          descriptionError: false,
        });
      } else if (!data.problemDescription.length) {
        setFormResult({
          text: "Опис проблеми не може бути пустим.",
          error: true,
          nameError: false,
          mailError: false,
          descriptionError: true,
        });
      }
    }
  }

  const handleClearForm = ({ text, error }) => {
    setData({
      fullName: "",
      mail: "",
      topic: "",
      problemType: [],
      problemDescription: "",
    });
    setFormResult({ text, error });
  };

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  function handleCheckboxChange(e, name) {
    const { value } = e.target;
    if (data[name].includes(value)) {
      setData({
        ...data,
        [name]: data[name].filter((item) => item !== value),
      });
    } else {
      setData({ ...data, [name]: [...data[name], value] });
    }
  }

  return (
    <main className={styles.main}>
      <Intro>
        <h2 className={styles.introTitle}>Контактна інформація Soldiers’Support</h2>
        <p className={styles.introSubtitle}>
          Якщо у вас виникла проблема і вам потрібна допомога, ви завжди можете заповнити форму
          звернення, яку протягом 1-3 днів роглянуть наші спеціалісти. Також, ви можете написати,
          або зателефонувати нам за нашими контактами.
        </p>
      </Intro>
      <section className={styles.feedback}>
        <div className={styles.feedbackContainer}>
          <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                ПІБ *
                <input
                  type="text"
                  placeholder="Введіть ПІБ"
                  className={`${styles.input} ${formResult.nameError ? styles.errorInput : ""}`}
                  value={data.fullName}
                  onChange={(e) => {
                    handleInputChange(e, "fullName");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                E-mail *
                <input
                  type="mail"
                  placeholder="Введіть e-mail"
                  className={`${styles.input} ${formResult.mailError ? styles.errorInput : ""}`}
                  value={data.mail}
                  onChange={(e) => {
                    handleInputChange(e, "mail");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Тема форми
                <input
                  type="text"
                  placeholder="Введіть тему форми"
                  className={styles.input}
                  value={data.topic}
                  onChange={(e) => {
                    handleInputChange(e, "topic");
                  }}
                />
              </label>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.label}>
                Виберіть тип проблеми
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      value="Юридичний"
                      checked={data.problemType.includes("Юридичний")}
                      onChange={(e) => {
                        handleCheckboxChange(e, "problemType");
                      }}
                    />
                    Юридичний
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      value="Технічний"
                      checked={data.problemType.includes("Технічний")}
                      onChange={(e) => {
                        handleCheckboxChange(e, "problemType");
                      }}
                    />
                    Технічний
                  </label>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      value="Індивідуальний"
                      checked={data.problemType.includes("Індивідуальний")}
                      onChange={(e) => {
                        handleCheckboxChange(e, "problemType");
                      }}
                    />
                    Індивідуальний
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Опис проблеми *
                <textarea
                  placeholder="Опишіть проблему"
                  className={`${styles.text} ${
                    formResult.descriptionError ? styles.errorInput : ""
                  }`}
                  value={data.problemDescription}
                  rows={5}
                  onChange={(e) => {
                    handleInputChange(e, "problemDescription");
                  }}
                />
              </label>
            </div>
            <div className={`${styles.formResult} ${formResult.error ? styles.error : ""}`}>
              {formResult.text}
            </div>
            <ButtonGradient
              text="Відправити форму"
              type="submit"
              view={{ pading: "15px 40px" }}
              img={heart}
            />
          </form>
        </div>
      </section>
      <section className={styles.contacts}>
        <div className={styles.contactsContainer}>
          <div className={styles.content}>
            <h3 className={styles.title}>Контакти</h3>
            <p className={styles.text}>
              <strong>Phone:</strong> +380966127710
              <br />
              <strong>Telegram:</strong> @Soldiers’Support
              <br />
              <strong>E-mail:</strong> soldierssupport@gmail.com
            </p>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Графік роботи кол-центру</h3>
            <p className={styles.text}>
              <strong>Пн-Пт:</strong> 09:00 - 18:00
              <br />
              <strong>Сб-Нд:</strong> 09:00 - 14:00
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
