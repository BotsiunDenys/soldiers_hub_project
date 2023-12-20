import { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import styles from "../../pages/FeeCreate/FeeCreate.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ value, onChange }) => {
  // const [date, setDate] = useState(new Date());

  // useEffect(() => dateHandle(date));

  const handleDateChange = (dateValue) => {
    if (!dateValue) {
      dateValue = new Date();
    }
    const year = String(dateValue.getFullYear());
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    // onChange(`${day}/${month}/${year}`);
    console.log(`${day}/${month}/${year}`);
    console.log(dateValue);
    return `${day}/${month}/${year}`;
  };

  return (
    <Datepicker
      // onChange={(e) => {
      //   // console.log(typeof handleDateChange(e));
      //   onChange(handleDateChange(e));
      //   console.log(value);
      // }}
      onChange={(e) => onChange(e)}
      selected={value}
      className={styles.datePicker}
      shouldCloseOnSelect={true}
      // dateFormat="dd/MM/yyyy"
      // id="datePicker"
    />
  );
};

export default DatePicker;

// const DatePicker = ({ dateHandle }) => {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => dateHandle(date));

//   return (
//     <Datepicker
//       onChange={(date) => setDate(date)}
//       className={styles.datePicker}
//       shouldCloseOnSelect={true}
//       selected={date}
//       dateFormat="dd/MM/yyyy"
//       id="datePicker"
//     />
//   );
// };
