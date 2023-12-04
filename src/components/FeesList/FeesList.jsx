import { useDispatch, useSelector } from "react-redux";
import {
  getFees,
  getMilitaryFees,
  getRebuildingFees,
  getVolunteersFees,
} from "../../store/slices/FeeSlice";
import FeesCard from "../FeesCard/FeesCard";
import styles from "./FeesList.module.scss";
import { useEffect } from "react";

const data = [
  {
    title: "40 FPV дронів для 80 ОДШБ",
    text: "Шановні українці, потребуємо вашої допомоги у зібранні коштів на 40 FPV дронів, облегшать наступальні дії на фронті.",
    filled: 40,
  },
  {
    title: "Сертифіковані аптечки",
    text: "Відкриваємо збір на сертифіковані аптечки для наших військових.",
    filled: 12,
  },
  {
    title: "На відновлення техніки",
    text: "Ми 45 механізована дивізія хочемо зібрати кошти на ремонт трофейного танку Т-90 «Прорив».",
    filled: 92,
  },
  {
    title: "На відновлення техніки",
    text: "Ми 45 механізована дивізія хочемо зібрати кошти на ремонт трофейного танку Т-90 «Прорив».",
    filled: 77,
  },
];

const FeesList = ({ status, feeType }) => {
  const dispatch = useDispatch();
  const {
    fees,
    volunteersFees: volunteerFees,
    rebuildingFees: rebuildFees,
    militaryFees,
  } = useSelector((state) => state.fees);

  const allFees = { fees, volunteerFees, rebuildFees, militaryFees };

  useEffect(() => {
    switch (feeType) {
      case "military":
        if (allFees.militaryFees.length == 0) {
          dispatch(getMilitaryFees());
        }
        break;
      case "volunteer":
        if (allFees.volunteerFees.length == 0) {
          dispatch(getVolunteersFees());
        }
        break;
      case "rebuild":
        if (allFees.rebuildFees.length == 0) {
          dispatch(getRebuildingFees());
        }
        break;
      default:
        if (allFees.fees.length == 0) {
          dispatch(getFees());
        }
        break;
    }
  }, [feeType]);

  return (
    <div className={styles.listContainer}>
      {feeType
        ? allFees[`${feeType}Fees`].map((element, index) => (
            <FeesCard
              key={index}
              title={element.name}
              text={element.description}
              sum={element.sum}
              img={element?.image}
              status={status}
            />
          ))
        : allFees.fees.map((element, index) => (
            <FeesCard
              key={index}
              title={element.name}
              text={element.description}
              sum={element.sum}
              img={element?.image}
              status={status}
            />
          ))}
    </div>
  );
};

export default FeesList;
