import { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getFees,
  getMilitaryFees,
  getVolunteersFees,
  getRebuildingFees,
} from "../../store/slices/FeeSlice";

import styles from "./Fees.module.scss";
import ButtonGradient from "../../components/ButtonGradient/ButtonGradient";
import Intro from "../../components/Intro/Intro";
import SpoilerFees from "../../components/SpoilerFees/SpoilerFees";
import FeesList from "../../components/FeesList/FeesList";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import heart from "../../assets/svg/heart.svg";

const options = [
  { value: "military", label: "Військовий" },
  { value: "volunteer", label: "Волонтерський" },
  { value: "rebuild", label: "На відбудову" },
  { value: "donnu", label: "Збори від донну" },
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
      color: "#f0f0ff",
    },
    "&:focus": {
      border: "none",
      color: "#f0f0f0",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    "&:hover": {
      color: "#dadada",
    },
    "&:focus": {
      color: "#dadada",
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  menu: (styles) => ({
    ...styles,
    width: "fit-content",
    borderRadius: "5px",
    backgroundColor: "#203260",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: "white",
    backgroundColor: isFocused ? "#213976" : isSelected && "#264185",
    transition: "all 0.2s ease-in-out",

    "&:active": {
      backgroundColor: "#264185",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "white",
  }),
};

const Fees = () => {
  const [feeType, setFeeType] = useState("donnu");
  const dispatch = useDispatch();
  // const fees = useSelector((state) => state.fees.fees);
  // const militaryFees = useSelector((state) => state.fees.militaryFees);
  // const volutneersFees = useSelector((state) => state.fees.volutneersFees);
  // const rebuildingFees = useSelector((state) => state.fees.rebuildingFees);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFee, setCurrentFee] = useState({});

  const handleSelectChange = (selectedOption) => {
    setFeeType(selectedOption.value);
  };

  // const handleGetFees = () => {
  //   dispatch(getFees());
  // };

  // const handleGetMilitaryFees = () => {
  //   dispatch(getMilitaryFees());
  // };

  // const handleGetVolunteerFees = () => {
  //   dispatch(getVolunteersFees());
  // };

  // const handleGetRebuildingFees = () => {
  //   dispatch(getRebuildingFees());
  // };

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
            <FeesList
              status="active"
              feeType={feeType}
              setModalVisible={setIsVisible}
              setCurrentFee={setCurrentFee}
            />
          </SpoilerFees>
          {/* <SpoilerFees title="Закриті">
            <FeesList
              status="closed"
              feeType={feeType}
              setModalVisible={setIsVisible}
              setCurrentFee={setCurrentFee}
            />
          </SpoilerFees> */}
          <ModalWindow isVisible={isVisible} setIsVisible={setIsVisible} currentFee={currentFee} />
        </div>
      </section>
    </main>
  );
};

export default Fees;
