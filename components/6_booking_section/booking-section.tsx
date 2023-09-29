import MainButton from "../UI/main_button";
import styles from "./booking-section.module.scss";
export default function BookingSection() {
  return (
    <section className={styles.booking_section}>
      <div className={styles.booking_card}>
        <div className={styles.booking_card_form_box}>
          <form action="#" className={styles.booking_card_form}>
            <h3 className={styles.heading_3}>Check Availability Now!</h3>
            <div className={styles.form_group}>
              <input
                className={styles.form_input}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
              />
              <label htmlFor="name" className={styles.form_label}>
                Full Name
              </label>
            </div>
            <div className={styles.form_group}>
              <input
                className={styles.form_input}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <label htmlFor="name" className={styles.form_label}>
                Email Address
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
