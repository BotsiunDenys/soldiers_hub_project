import styles from "./InputErrorMessage.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const InputErrorMessage = ({ children, isWhite }) => {
  return (
    <AnimatePresence>
      {children && (
        <motion.p
          animate={{
            height: "auto",
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          initial={{ height: 0 }}
          exit={{
            height: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className={styles.errorMessage}
          style={isWhite && { color: "#fff" }}
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default InputErrorMessage;
