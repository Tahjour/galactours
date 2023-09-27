import Image from "next/image";
import Link from "next/link";
import styles from "./about_section.module.scss";
export default function AboutSection() {
  return (
    <section className={styles.about_section}>
      <h2 className={styles.heading_2} style={{ marginBottom: "2rem" }}>
        Thrilling tours around the milky way
      </h2>
      <div className={styles.grid_box}>
        <div className={styles.info_box}>
          <h3 className={styles.heading_3}>Gaze at the sight of new worlds</h3>
          <p className={styles.paragraph}>
            Every sight is a testament to the grandeur of the cosmos, from the swirling gas giants
            to the rocky terrains of distant planets.
          </p>

          <h3 className={styles.heading_3}>Experience travel near the speed of light</h3>
          <p className={styles.paragraph}>
            Our state-of-the-art spacecrafts, equipped with cutting-edge propulsion technology, will
            transport you across the cosmos in the blink of an eye. Feel the exhilaration of
            light-speed travel as stars become streaks of light and galaxies blur into cosmic
            rivers.
          </p>

          <Link href={"#"} className={styles.link_button}>
            Learn more &rarr;
          </Link>
        </div>
        <div className={styles.images_composition_box}>
          <Image
            className={`${styles.composition_image} ${styles.image_1}`}
            src="/images/massive-spaceship.jpg"
            alt="Image of light speed travel"
            width={1152}
            height={768}
          />
          <Image
            className={`${styles.composition_image} ${styles.image_2}`}
            src="/images/cluster-of-planets1.jpg"
            alt="A cluster of planets"
            width={1152}
            height={768}
          />
          <Image
            className={`${styles.composition_image} ${styles.image_3}`}
            src="/images/alien-cliff-view.jpg"
            alt="A view off an alien cliff"
            width={1152}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}