import Datepicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.scss";

const DatePicker = ({ value, onChange, onBlur, isValid }) => {
  return (
    <Datepicker
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      className={`${isValid && "isValid"}`}
      // returnValue="start"
    />
  );
};

export default DatePicker;
