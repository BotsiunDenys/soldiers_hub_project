import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import styles from "./ModalWindow.module.scss";
import { current } from "immer";

const ModalWindow = ({ isVisible, setIsVisible, currentFee }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <motion.div
            className={styles.modalContainer}
            onClick={(e) => {
              e.stopPropagation();
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.4,
              },
            }}
            initial={{ scale: 0 }}
            exit={{
              scale: 0,
            }}
          >
            <h1 className={styles.title}>Інформація про збір</h1>
            <p className={styles.subtitle}>
              E-mail ініціатора збору: {currentFee.email}
              <br />
              Назва збору: {currentFee.name}
              <br />
              Тип збору: {currentFee.type}
              <br />
              Опис збору: {currentFee.description}
              <br />
              Необхідна сума на збір: {currentFee.sum} грн.
              <br />
              Реквізити: {currentFee.requisite}
              <br />
              Дата завершення збору: {currentFee.finish}
            </p>
            <IoClose
              className={styles.icon}
              size={25}
              onClick={() => {
                setIsVisible(false);
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalWindow;
