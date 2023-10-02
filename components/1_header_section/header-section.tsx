// components\1_header_section\header-section.tsx
import { motion } from "framer-motion";
import styles from "./header_section.module.scss";
import Image from "next/image";
import MainButton from "../UI/main_button";
export default function HeaderSection() {
  return (
    <header className={styles.header_section} id="header_section">
      <motion.div
        className={styles.header_section_logo_box}
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <div className={styles.header_section_logo_box_image_box}>
          <Image
            className={styles.header_section_logo_box_image_box_image}
            src="/media/logo-white.png"
            alt="Galactours logo"
            fill
          />
        </div>
        <h1>Galactours</h1>
      </motion.div>
      <div className={styles.header_section_heading_box}>
        <div className={styles.header_section_heading_box_sub_box}>
          <h1 className={styles.heading_1_box}>
            <motion.div
              className={styles.heading_1_box_main}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              Galaxies
            </motion.div>
            <motion.div
              className={styles.heading_1_box_sub}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              are meant to be explored
            </motion.div>
          </h1>
          <MainButton
            message="See Our Tours"
            location="header_section"
            type_class="button_welcome"
          />
        </div>
      </div>
    </header>
  );
}
