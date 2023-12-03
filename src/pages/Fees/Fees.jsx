import { useEffect, useState } from "react";
import Select from "react-select";

import styles from "./Fees.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import Intro from "../../components/Intro/Intro";
import SpoilerFees from "../../components/SpoilerFees/SpoilerFees";
import heart from "../../assets/svg/heart.svg";
import FeesList from "../../components/FeesList/FeesList";
import { useDispatch, useSelector } from "react-redux";
import { getFees } from "../../store/slices/FeeSlice";

const options = [
  { value: "military", label: "Військовий" },
  { value: "volunteer", label: "Волонтерський" },
  { value: "rebuild", label: "На відбудову" },
];

const selectStyles = {
  control: (styles, { menuIsOpen }) => ({
    ...styles,
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "20px",
    border: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      border: "none",
      color: "#f0f0f0",
    },
    "&:focus": {
      border: "none",
      color: "#f0f0f0",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "black",
    "&:hover": {
      color: "#969696",
    },
    "&:focus": {
      color: "#969696",
    },
  }),
  menu: (styles) => ({
    ...styles,
    width: "fit-content",
    borderRadius: "5px",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: "black",
    backgroundColor: isFocused ? "hsl(0, 0%, 85%)" : isSelected && "hsl(0, 0%, 70%)",
    transition: "all 0.2s ease-in-out",

    "&:active": {
      backgroundColor: "hsl(0, 0%, 70%)",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "black",
  }),
};

const Fees = () => {
  const [feeType, setFeeType] = useState("");
  const dispatch = useDispatch();
  const fees = useSelector((state) => state.fees.fees);

  const handleSelectChange = (selectedOption) => {
    setFeeType(selectedOption.value);
  };

  useEffect(() => {
    dispatch(getFees());
  }, []);

  return (
    <main className={styles.main}>
      <Intro>
        <h2 className={styles.introTitle}>Благодійні збори</h2>
        <p className={styles.introSubtitle}>
          Наш проект є першою в Україні платформою, яка містить у собі всі можливі благодійні збори,
          починаючи з військових та закінчуючи зборами для міських громад. Ми намагаємося зробити
          так, щоб кожен бажаючий мав можливість легко створити власний збір, а також зручно
          переглядати всі наявні збори, щоб обрати той, який є важливим на його думку.
        </p>
        <ButtonGradient
          link="/feecreate"
          text="Створити збір"
          img={heart}
          view={{ pading: "15px 50px" }}
        />
      </Intro>
      <section className={styles.fees}>
        <div className={styles.feesContainer}>
          <div className={styles.heading}>
            <h3 className={styles.headingTitle}>Усі збори</h3>
            <Select
              isSearchable={false}
              options={options}
              value={options.find((option) => option.value === feeType)}
              onChange={handleSelectChange}
              styles={selectStyles}
              placeholder="Тип збору"
            />
          </div>
          <SpoilerFees title="Активні">
            <FeesList status="active" />
          </SpoilerFees>
          <SpoilerFees title="Закриті">
            <FeesList status="closed" />
          </SpoilerFees>
        </div>
      </section>
    </main>
  );
};

export default Fees;
