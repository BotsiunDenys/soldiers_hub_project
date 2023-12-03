import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminFeeDetail from "../../components/AdminFeeDetail/AdminFeeDetail";
import styles from "./AdminPanel.module.scss";
import { getApplications } from "../../store/slices/FeeSlice";

const AdminPanel = () => {
  const data = useSelector((state) => state.fees.applications);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApplications());
  }, []);

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
