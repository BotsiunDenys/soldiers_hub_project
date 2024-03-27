import React, { useEffect, useState } from "react";
import styles from "./Defender.module.scss";
import img from "../../assets/defender.png";
import ModalWindowUniversal from "../ModalWindowUniversal/ModalWindowUniversal";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteDefender, deleteFallenDefender } from "../../store/slices/DefenderSlice";

const Defender = ({ data, dead }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const handleDeleteIcon = (e) => {
    e.stopPropagation();
    if (dead) {
      dispatch(deleteFallenDefender(data._id));
    } else {
      dispatch(deleteDefender(data._id));
    }
  };

  const birth = new Date(data.birthDate).toLocaleDateString("uk-UA");
  const death = new Date(data.deathDate).toLocaleDateString("uk-UA");

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const convertedImgSrc = arrayBufferToBase64(data.image.data);

  useEffect(() => {
    if (isModalVisible === true) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isModalVisible]);

  return (
    <div
      className={`${styles.galleryItem} ${dead && styles.dead}`}
      onClick={() => setModalVisible(true)}
    >
      <img
        src={`data:image/jpg;base64,${convertedImgSrc}`}
        alt="defender img"
        className={styles.galleryImg}
      />
      <h2 className={styles.galleryTitle}>{`${data.lastName} ${data.name}`}</h2>
      {isAdmin && (
        <div className={styles.actionWrapper}>
          <MdDelete className={styles.actionIcon} onClick={handleDeleteIcon} />
        </div>
      )}
      <ModalWindowUniversal isVisible={isModalVisible} setIsVisible={setModalVisible}>
        <div className={styles.defenderWrapper}>
          <h2 className={styles.defenderName}>{`${data.lastName} ${data.name}`}</h2>
          <div className={styles.defenderImage}>
            <img src={`data:image/jpg;base64,${convertedImgSrc}`} alt="defender`s photo" />
          </div>
          <p className={styles.text}>{`${birth} - ${death}`}</p>
          <p className={styles.text}>{`${data.bio}`}</p>
        </div>
      </ModalWindowUniversal>
    </div>
  );
};

export default Defender;
