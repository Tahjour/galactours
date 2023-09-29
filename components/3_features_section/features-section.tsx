import { BsCompass, BsRocketTakeoff } from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";
import styles from "./features-section.module.scss";
export default function FeaturesSection() {
  return (
    <section className={styles.features_section}>
      <div className={styles.features_grid}>
        <div className={styles.feature_box}>
          <BsRocketTakeoff className={styles.feature_box_icon} />
          <h3 className={styles.heading_3}>Explore the galaxy</h3>
          <p className={`${styles.paragraph} ${styles.feature_box_text}`}>
            Dive into the depths of our galaxy at speeds near the speed of light
          </p>
        </div>
        <div className={styles.feature_box}>
          <MdOutlineSocialDistance className={styles.feature_box_icon} />
          <h3 className={styles.heading_3}>Meet Alien Life</h3>
          <p className={`${styles.paragraph} ${styles.feature_box_text}`}>
            Meet and socialize with our galactic neighbors
          </p>
        </div>
        <div className={styles.feature_box}>
          <BsCompass className={styles.feature_box_icon} />
          <h3 className={styles.heading_3}>Find New Meaning</h3>
          <p className={`${styles.paragraph} ${styles.feature_box_text}`}>
            Question the meaning of life all over again
          </p>
        </div>
      </div>
    </section>
  );
}
