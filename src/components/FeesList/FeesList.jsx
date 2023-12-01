import FeesCard from "../FeesCard/FeesCard";
import styles from "./FeesList.module.scss";

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

const FeesList = ({ status }) => {
  return (
    <div className={styles.listContainer}>
      {data.map((element) => (
        <FeesCard
          title={element.title}
          text={element.text}
          filled={element.filled}
          status={status}
        />
      ))}
    </div>
  );
};

export default FeesList;
