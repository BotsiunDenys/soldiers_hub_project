import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminFeeDetail from "../../components/AdminFeeDetail/AdminFeeDetail";
import styles from "./AdminPanel.module.scss";
import { getApplications } from "../../store/slices/FeeSlice";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const data = useSelector((state) => state.fees.applications);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      if (!isAdmin) {
        navigate("/");
      } else {
        dispatch(getApplications());
      }
    }
  }, [isLogged, isAdmin]);

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
