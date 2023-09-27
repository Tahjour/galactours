import { motion } from "framer-motion";
import styles from "./main-button.module.scss";
import { useState } from "react";

export default function MainButton({ message, location }: { message: string; location?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      className={`${styles.main_button} ${styles.button_white} ${
        location === "tours_section" ? styles.button_all_tours : ""
      }`}
      initial={location === "header_section" ? { opacity: 0, y: 10 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: location === "header_section" ? { duration: 0.5, delay: 0.5 } : {},
        y: location === "header_section" ? { duration: 0.5, delay: 0.5 } : {},
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: "-0.1875rem", transition: { y: { duration: 0.1 } } }}
      whileFocus={{ y: "-0.1875rem", transition: { y: { duration: 0.1 } } }}
      whileTap={{ y: "-0.0625rem", transition: { y: { duration: 0.1 } } }}
    >
      {message}
    </motion.button>
  );
}
