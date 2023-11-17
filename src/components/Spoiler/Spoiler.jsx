import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Spoiler.module.scss";
import arrow from "../../assets/svg/arrow.svg";

const Spoiler = ({ children, title }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className={styles.spoiler}>
      <h3 className={styles.spoilerTitle} onClick={() => setVisible(!isVisible)}>
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
            className={styles.textContainer}
            animate={{
              height: "auto",
              transition: {
                type: "spring",
                bounce: 0.3,
                duration: 1,
              },
            }}
            initial={{ height: 0 }}
            exit={{
              height: 0,
              transition: {
                duration: 0.5,
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

export default Spoiler;

/** <div className={styles.spoiler}>
      <h3 className={styles.spoilerTitle} onClick={() => setVisible(!isVisible)}>
        {title}
      </h3>
      <motion.div initial={false} animate={isVisible ? "open" : "closed"}>
        <div className={styles.textContainer}>{children}</div>
      </motion.div>
    </div> 
    
    animate={{
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            }}
            initial={{
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            }}
            exit={{
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            }}
    
    
    
    */
