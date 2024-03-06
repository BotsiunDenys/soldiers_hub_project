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

// const data = [
//   {
//     title: "40 FPV дронів для 80 ОДШБ",
//     text: "Шановні українці, потребуємо вашої допомоги у зібранні коштів на 40 FPV дронів, облегшать наступальні дії на фронті.",
//     filled: 40,
//   },
//   {
//     title: "Сертифіковані аптечки",
//     text: "Відкриваємо збір на сертифіковані аптечки для наших військових.",
//     filled: 12,
//   },
//   {
//     title: "На відновлення техніки",
//     text: "Ми 45 механізована дивізія хочемо зібрати кошти на ремонт трофейного танку Т-90 «Прорив».",
//     filled: 92,
//   },
//   {
//     title: "На відновлення техніки",
//     text: "Ми 45 механізована дивізія хочемо зібрати кошти на ремонт трофейного танку Т-90 «Прорив».",
//     filled: 77,
//   },
// ];

const FeesList = ({ status, feeType, setModalVisible, setCurrentFee }) => {
  const dispatch = useDispatch();
  const {
    fees,
    volunteersFees: volunteerFees,
    rebuildingFees: rebuildFees,
    militaryFees,
  } = useSelector((state) => state.fees);

  const allFees = { fees, volunteerFees, rebuildFees, militaryFees };

  // function dateParse(fees) {
  //   console.log("asd");
  //   const dateNow = Date.now();
  //   const year = dateNow.getFullYear();
  //   const month = dateNow.getMonth();
  //   const day = dateNow.getDay();
  //   const feeYear = elem.finish.split(".")[2];
  //   const feeMonth = elem.finish.split(".")[1];
  //   const feeDay = elem.finish.split(".")[0];
  //   return fees.map((elem) => {
  //     if (year == feeYear && month == feeMonth && day == feeDay) {
  //       return { ...elem, isClosed: true };
  //     }
  //     return { ...elem, isClosed: false };
  //   });
  // }

  useEffect(() => {
    switch (feeType) {
      case "military":
        if (allFees.militaryFees.length == 0) {
          dispatch(getMilitaryFees());
          // allFees.militaryFees = dateParse(militaryFees);
        }
        break;
      case "volunteer":
        if (allFees.volunteerFees.length == 0) {
          dispatch(getVolunteersFees());
          // allFees.volunteerFees = dateParse(volunteerFees);
        }
        break;
      case "rebuild":
        if (allFees.rebuildFees.length == 0) {
          dispatch(getRebuildingFees());
          // allFees.rebuildFees = dateParse(rebuildFees);
        }
        break;
      default:
        if (allFees.fees.length == 0) {
          dispatch(getFees());
          // allFees.fees = dateParse(fees);
        }
        break;
    }
  }, [feeType]);

  console.log(allFees);

  return (
    <div className={styles.listContainer}>
      {feeType
        ? allFees[`${feeType}Fees`].map((element, index) => (
            // console.log(element),
            <FeesCard
              key={index}
              data={element}
              status={status}
              setCurrentFee={setCurrentFee}
              setModalVisible={setModalVisible}
            />
          ))
        : allFees.fees.map((element, index) => (
            <FeesCard
              key={index}
              data={element}
              status={status}
              setCurrentFee={setCurrentFee}
              setModalVisible={setModalVisible}
            />
          ))}
    </div>
  );
};

export default FeesList;
