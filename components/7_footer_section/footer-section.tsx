import Image from "next/image";
import styles from "./footer-section.module.scss";
import Link from "next/link";
export default function FooterSection() {
  return (
    <section className={styles.footer_section} id="footer_section">
      <div className={styles.footer_logo_box}>
        <div className={styles.footer_logo_image_box}>
          <Image
            className={styles.footer_logo_image}
            src="/media/logo-pink.png"
            alt="Galactours logo"
            fill
          />
        </div>
        <h1 className={`${styles.heading_1_box} ${styles.footer_logo_name}`}>Galactours</h1>
      </div>
      <div className={styles.footer_grid}>
        <div className={styles.footer_nav_box}>
          <ul className={styles.footer_nav_list}>
            <li className={styles.footer_nav_list_item}>
              <button className={styles.footer_nav_button}>Company</button>
            </li>
            <li className={styles.footer_nav_list_item}>
              <button className={styles.footer_nav_button}>Contact Us</button>
            </li>
            <li className={styles.footer_nav_list_item}>
              <button className={styles.footer_nav_button}>Careers</button>
            </li>
            <li className={styles.footer_nav_list_item}>
              <button className={styles.footer_nav_button}>Privacy Policy</button>
            </li>
            <li className={styles.footer_nav_list_item}>
              <button className={styles.footer_nav_button}>Terms</button>
            </li>
          </ul>
        </div>
        <p className={styles.footer_copyright_text}>
          This page took inspiration from the{" "}
          <Link href={"https://natours.netlify.app/"} target="_blank">
            Natours
          </Link>{" "}
          project by{" "}
          <Link href={"https://www.udemy.com/user/jonasschmedtmann/"} target="_blank">
            Jonas Schmedtmann
          </Link>
          . {"It's"} been redesigned by me,{" "}
          <Link href={"https://www.linkedin.com/in/tahjourallman/"}>Tahjour Allman</Link>.
        </p>
      </div>
    </section>
  );
}
