import { AnimatePresence, motion } from "framer-motion";
import styles from "./ModalWindowUniversal.module.scss";

const ModalWindowUniversal = ({ isVisible, setIsVisible, children }) => {
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
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.modalContainer}
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
            {children}
            <button
              className={styles.closeButton}
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

export default ModalWindowUniversal;
