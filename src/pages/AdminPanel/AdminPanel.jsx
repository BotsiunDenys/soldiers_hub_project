import img from "../../assets/intro-img.jpg";
import AdminFeeDetail from "../../components/AdminFeeDetail/AdminFeeDetail";
import styles from "./AdminPanel.module.scss";

const data = [
  {
    image: img,
    name: "Назва",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sum: 20000,
    username: "Степан Дмитрович",
    feeType: "Військовий",
    email: "sobaka@gmail.com",
    date: "35 днів",
  },
  {
    image: img,
    name: "Назва",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sum: 20000,
    username: "Степан Дмитрович",
    feeType: "Військовий",
    email: "sobaka@gmail.com",
    date: "35 днів",
  },
  {
    image: img,
    name: "Назва",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sum: 20000,
    username: "Степан Дмитрович",
    feeType: "Військовий",
    email: "sobaka@gmail.com",
    date: "35 днів",
  },
  {
    image: img,
    name: "Назва",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sum: 20000,
    username: "Степан Дмитрович",
    feeType: "Військовий",
    email: "sobaka@gmail.com",
    date: "35 днів",
  },
  {
    image: img,
    name: "Назва",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sum: 20000,
    username: "Степан Дмитрович",
    feeType: "Військовий",
    email: "sobaka@gmail.com",
    date: "35 днів",
  },
];

const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.requests}>
        <div className={styles.requests_header}>Запити на підтвердження</div>
        <div className={styles.requests_feesContainer}>
          {data.map((fee, index) => (
            <AdminFeeDetail key={index} data={fee} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
