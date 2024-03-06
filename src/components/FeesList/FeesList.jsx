import { useDispatch, useSelector } from "react-redux";
import {
  getDonnuFees,
  getFees,
  getMilitaryFees,
  getRebuildingFees,
  getVolunteersFees,
} from "../../store/slices/FeeSlice";
import FeesCard from "../FeesCard/FeesCard";
import styles from "./FeesList.module.scss";
import { useEffect } from "react";

const FeesList = ({ status, feeType, setModalVisible, setCurrentFee }) => {
  const dispatch = useDispatch();
  const fees = useSelector((state) => state.fees.fees);
  // const {
  //   fees,
  //   volunteersFees: volunteerFees,
  //   rebuildingFees: rebuildFees,
  //   militaryFees,
  // } = useSelector((state) => state.fees);

  // const allFees = { fees, volunteerFees, rebuildFees, militaryFees };

  useEffect(() => {
    switch (feeType) {
      case "military":
        dispatch(getMilitaryFees());
        break;
      case "volunteer":
        dispatch(getVolunteersFees());
        break;
      case "rebuild":
        dispatch(getRebuildingFees());
        break;
      case "donnu":
        dispatch(getDonnuFees());
        break;
      default:
        dispatch(getFees());
        break;
    }
  }, [feeType]);

  return (
    <div className={styles.listContainer}>
      {fees.map((element, index) => (
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

// allFees[`${feeType}Fees`].map((element, index) => (
//   <FeesCard
//     key={index}
//     data={element}
//     status={status}
//     setCurrentFee={setCurrentFee}
//     setModalVisible={setModalVisible}
//   />
// ))
