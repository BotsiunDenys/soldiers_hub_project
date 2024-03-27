import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./DonnuDefenders.module.scss";
import Defender from "../../components/Defender/Defender";
import DefenderAdd from "../../components/DefenderAdd/DefenderAdd";
import { FaLongArrowAltRight } from "react-icons/fa";
import { getDefenders } from "../../store/slices/DefenderSlice";

const DonnuDefenders = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const defenders = useSelector((state) => state.defenders.defenders);

  useEffect(() => {
    dispatch(getDefenders());
  }, []);

  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Захисники ДонНУ</h1>
            <Link className={styles.link} to={"/fallendefenders"}>
              Книга пам'яті <FaLongArrowAltRight />
            </Link>
            <div className={styles.galleryWrapper}>
              {defenders.map((element, index) => (
                <Defender key={index} data={element} />
              ))}
              {isAdmin && <DefenderAdd />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonnuDefenders;
