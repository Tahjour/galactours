import { motion } from "framer-motion";
import styles from "./header_section.module.scss";
import Image from "next/image";
import MainButton from "../UI/main_button";
export default function HeaderSection() {
  return (
    <header className={styles.header_section}>
      <motion.div
        className={styles.header_section_logo_box}
        animate={{
          opacity: [0, 1],
          x: [100, 0],
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.header_section_logo_box_image_box}>
          <Image
            className={styles.header_section_logo_box_image_box_image}
            src="/media/logo-white.png"
            alt="Planetours logo"
            width={50}
            height={49}
          />
        </div>
        <h1>Galactours</h1>
      </motion.div>
      <div className={styles.header_section_heading_box}>
        <div className={styles.header_section_heading_box_sub_box}>
          <h1 className={styles.heading_1}>
            <motion.div
              className={styles.heading_1_main}
              variants={{
                visible: {
                  opacity: [0, 1],
                  x: [-100, 0],
                },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              // initial="hidden"
              animate="visible"
            >
              Galaxies
            </motion.div>
            <motion.div
              className={styles.heading_1_sub}
              animate={{
                opacity: [0, 1],
                x: [100, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              are meant to be explored
            </motion.div>
          </h1>
          <MainButton message="Discover our tours" location="header_section" />
        </div>
      </div>
    </header>
  );
}
