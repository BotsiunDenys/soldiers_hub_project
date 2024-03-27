import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DonnuFallenDefenders.module.scss";
import Defender from "../../components/Defender/Defender";
import DefenderAdd from "../../components/DefenderAdd/DefenderAdd";
import { getFallenDefenders } from "../../store/slices/DefenderSlice";

const DonnuFallenDefenders = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const fallenDefenders = useSelector((state) => state.defenders.fallenDefenders);

  useEffect(() => {
    dispatch(getFallenDefenders());
  }, []);

  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Книга пам'яті</h1>
            <div className={styles.galleryWrapper}>
              {fallenDefenders.map((element, index) => (
                <Defender dead data={element} key={index} />
              ))}
              {isAdmin && <DefenderAdd dead />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonnuFallenDefenders;
