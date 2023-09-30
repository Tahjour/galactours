import MainButton from "../UI/main_button";
import styles from "./booking-section.module.scss";
export default function BookingSection() {
  return (
    <section className={styles.booking_section} id="booking_section">
      <div className={styles.booking_card}>
        <div className={styles.booking_card_form_box}>
          <form action="#" className={styles.booking_card_form}>
            <h3
              className={` ${styles.form_heading} ${styles.heading_3} ${styles.u_medium_margin_bottom}`}
            >
              Check Availability Now!
            </h3>
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

            <div className={styles.form_group}>
              <div className={styles.form_radio_group}>
                <input type="radio" className={styles.form_radio_input} id="novice" name="tier" />
                <label htmlFor="novice" className={styles.form_radio_label}>
                  <span className={styles.form_radio_button}></span>
                  Novice
                </label>
              </div>
              <div className={styles.form_radio_group}>
                <input type="radio" className={styles.form_radio_input} id="pro" name="tier" />
                <label htmlFor="pro" className={styles.form_radio_label}>
                  <span className={styles.form_radio_button}></span>
                  Pro
                </label>
              </div>
              <div className={styles.form_radio_group}>
                <input type="radio" className={styles.form_radio_input} id="ultra" name="tier" />
                <label htmlFor="ultra" className={styles.form_radio_label}>
                  <span className={styles.form_radio_button}></span>
                  Ultra
                </label>
              </div>
            </div>

            <MainButton
              message="Check Availability &rarr;"
              location="booking_section"
              type_class="button_booking"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
