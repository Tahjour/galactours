import { motion } from "framer-motion";
import styles from "./main-button.module.scss";
import { useState } from "react";
import { selectSectionAndScroll } from "./smooth-scrolling/select-section-and-scroll";

export default function MainButton({
  message,
  location,
  type_class,
}: {
  message: string;
  location?: string;
  type_class?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      className={`${styles.main_button} ${styles.button_white} ${
        type_class === "button_welcome" ? styles["button_welcome"] : ""
      } ${type_class === "button_all_tours" ? styles["button_all_tours"] : ""} ${
        type_class === "button_booking" ? styles["button_booking"] : ""
      }`}
      // initial={location === "header_section" ? { opacity: 0, y: 10 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        // opacity: location === "header_section" ? { duration: 0.5, delay: 0.5 } : {},
        opacity: { duration: 0.5, delay: 0.5 },
        y: location === "header_section" && !isHovered ? { duration: 0.5, delay: 0.5 } : {},
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: "-0.1875vmax", transition: { y: { duration: 0.1 } } }}
      whileFocus={{ y: "-0.1875vmax", transition: { y: { duration: 0.1 } } }}
      whileTap={{ y: "-0.0625vmax", transition: { y: { duration: 0.1 } } }}
      onClick={() => {
        location === "header_section" &&
          type_class === "button_welcome" &&
          selectSectionAndScroll("tours_section");
      }}
    >
      {message}
    </motion.button>
  );
}
