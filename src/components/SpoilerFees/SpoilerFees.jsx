import { useState } from "react";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";

import styles from "./SpoilerFees.module.scss";
import arrow from "../../assets/svg/arrow.svg";

const SpoilerFees = ({ children, title }) => {
  const [isVisible, setVisible] = useState(false);

  // console.log(isVisible);

  return (
    <div className={styles.spoiler}>
      <h3 className={styles.spoilerTitle} onClick={() => setVisible((param) => !param)}>
        {title}
        <motion.img
          src={arrow}
          style={{ width: "24px" }}
          animate={isVisible ? "open" : "closed"}
          variants={{
            open: { rotate: 540, transition: { ease: [0.2, 0.7, 0.3, 1], duration: 1 } },
            closed: { rotate: 0, transition: { ease: [0.2, 0.7, 0.3, 1], duration: 1 } },
          }}
        />
      </h3>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.contantContainer}
            animate={{
              height: "auto",
              transition: {
                duration: 0.75,
                ease: "easeInOut",
              },
            }}
            initial={{ height: 0 }}
            exit={{
              height: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpoilerFees;
