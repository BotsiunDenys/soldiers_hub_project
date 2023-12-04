import { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import styles from "../../pages/FeeCreate/FeeCreate.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ dateHandle }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => dateHandle(date));

  return (
    <Datepicker
      onChange={(date) => setDate(date)}
      className={styles.datePicker}
      shouldCloseOnSelect={true}
      selected={date}
      dateFormat="dd/MM/yyyy"
      id="datePicker"
    />
  );
};

export default DatePicker;
