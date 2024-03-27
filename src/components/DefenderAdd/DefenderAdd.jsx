import React, { useEffect, useState } from "react";
import styles from "./DefenderAdd.module.scss";
import { IoIosAdd } from "react-icons/io";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalWindowUniversal from "../ModalWindowUniversal/ModalWindowUniversal";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";
import { FaUpload, FaCheck } from "react-icons/fa6";
import ButtonGradient from "../ButtonGradient/ButtonGradient";
import DatePicker from "../../components/DatePicker/DatePicker";
import img from "../../assets/svg/heart.svg";
import { createDefender, createFallenDefender } from "../../store/slices/DefenderSlice";

const DefenderAdd = ({ dead }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible === true) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isVisible]);

  const handleFormSubmit = async (data) => {
    const application = new FormData();
    Object.keys(data).forEach((el) => {
      application.append(el, data[el]);
    });
    application.append("image", data.image[0]);

    if (dead) {
      application.append("birthDate", Date.parse(data.birth));
      application.append("deathDate", Date.parse(data.death));
    }

    if (dead) {
      dispatch(createFallenDefender(application));
    } else {
      dispatch(createDefender(application));
    }
    reset();
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

  return (
    <div
      className={styles.galleryItemAdd}
      onClick={() => {
        setIsVisible(true);
      }}
    >
      <IoIosAdd />
      <ModalWindowUniversal isVisible={isVisible} setIsVisible={setIsVisible}>
        <form className={styles.formContainer} onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Ім'я
              <input
                placeholder="Введіть ім'я"
                className={`${styles.input} ${errors?.name && styles.inputError}`}
                {...register("name", {
                  required: "Поле обов'язкове до заповнення",
                })}
              />
            </label>
            <InputErrorMessage>{errors?.name?.message}</InputErrorMessage>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Прізвище
              <input
                placeholder="Введіть прізвище"
                className={`${styles.input} ${errors?.lastName && styles.inputError}`}
                {...register("lastName", {
                  required: "Поле обов'язкове до заповнення",
                })}
              />
            </label>
            <InputErrorMessage>{errors?.lastName?.message}</InputErrorMessage>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Біо
              <textarea
                placeholder="Напишіть біо"
                className={`${styles.input} ${errors?.bio && styles.inputError}`}
                {...register("bio", {
                  required: "Поле обов'язкове до заповнення",
                })}
              />
            </label>
            <InputErrorMessage>{errors?.bio?.message}</InputErrorMessage>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Фото
              <div className={`${styles.upload} ${errors.image && styles.inputError}`}>
                {getValues("image")?.length > 0 ? <FaCheck /> : <FaUpload />}
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
          {dead && (
            <div className={styles.dateWrapper}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Дата народження
                  <Controller
                    control={control}
                    name="birth"
                    rules={{ required: "Вкажіть дату народження" }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <DatePicker
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        isValid={!!errors?.birth}
                      />
                    )}
                  />
                </label>
                <InputErrorMessage>{errors?.birth?.message}</InputErrorMessage>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Дата смерті
                  <Controller
                    control={control}
                    name="death"
                    rules={{ required: "Вкажіть дату смерті" }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <DatePicker
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                        isValid={!!errors?.death}
                      />
                    )}
                  />
                </label>
                <InputErrorMessage>{errors?.death?.message}</InputErrorMessage>
              </div>
            </div>
          )}
          <ButtonGradient
            type="submit"
            img={img}
            text="Додати"
            view={{ pading: "10px 30px" }}
            isValid={isValid}
          />
        </form>
      </ModalWindowUniversal>
    </div>
  );
};

export default DefenderAdd;
