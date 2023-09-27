import MainButton from "../UI/main_button";
import styles from "./tours-section.module.scss";
export default function ToursSection() {
  return (
    <section className={styles.tours_section}>
      <h2 className={`${styles.heading_2} ${styles.u_medium_margin_bottom}`}>
        Our Most Popular Tours
      </h2>
      <div className={styles.tours_section_grid}>
        <div className={styles.tour_card}>
          <div className={`${styles.tour_card_side} ${styles.tour_card_side_front}`}>
            <div className={`${styles.tour_card_image_box} ${styles.tour_card_image_box_1}`}>
              &nbsp;
            </div>
            <h4 className={styles.tour_card_heading}>
              <span
                className={`${styles.tour_card_heading_span} ${styles.tour_card_heading_span_1}`}
              >
                Novice Tier
              </span>
            </h4>
            <div className={styles.tour_card_details}>
              <ul>
                <li>5 Planets</li>
                <li>1000 Travelers</li>
                <li>100 Tour Guides</li>
                <li>Luxurious Rooms on Spaceship</li>
                <li>~ 1 Year</li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.tour_card_side} ${styles.tour_card_side_back} ${styles.tour_card_side_back_card1}`}
          >
            <div className={styles.tour_card_back_box}>
              <div className={styles.tour_card_price_box}>
                <p className={styles.tour_card_price_only}>Only</p>
                <p className={styles.tour_card_price_value}>$299.99</p>
                <p className={styles.tour_card_price_after_text}>
                  for the experience of a lifetime
                </p>
              </div>
              <MainButton message="Book Now!" />
            </div>
          </div>
        </div>
        <div className={styles.tour_card}>
          <div className={`${styles.tour_card_side} ${styles.tour_card_side_front}`}>
            <div className={`${styles.tour_card_image_box} ${styles.tour_card_image_box_2}`}>
              &nbsp;
            </div>
            <h4 className={styles.tour_card_heading}>
              <span
                className={`${styles.tour_card_heading_span} ${styles.tour_card_heading_span_2}`}
              >
                Pro Tier
              </span>
            </h4>
            <div className={styles.tour_card_details}>
              <ul>
                <li>25 Planets</li>
                <li>5000 Travelers</li>
                <li>500 Tour Guides</li>
                <li>Luxurious Rooms on Spaceship</li>
                <li>~ 5 Years</li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.tour_card_side} ${styles.tour_card_side_back} ${styles.tour_card_side_back_card2}`}
          >
            <div className={styles.tour_card_back_box}>
              <div className={styles.tour_card_price_box}>
                <p className={styles.tour_card_price_only}>Only</p>
                <p className={styles.tour_card_price_value}>$599.99</p>
                <p className={styles.tour_card_price_after_text}>
                  for the experience of a lifetime
                </p>
              </div>
              <MainButton message="Book Now!" />
            </div>
          </div>
        </div>
        <div className={styles.tour_card}>
          <div className={`${styles.tour_card_side} ${styles.tour_card_side_front}`}>
            <div className={`${styles.tour_card_image_box} ${styles.tour_card_image_box_3}`}>
              &nbsp;
            </div>
            <h4 className={styles.tour_card_heading}>
              <span
                className={`${styles.tour_card_heading_span} ${styles.tour_card_heading_span_3}`}
              >
                Ultra Tier
              </span>
            </h4>
            <div className={styles.tour_card_details}>
              <ul>
                <li>100 Planets</li>
                <li>20000 Travelers</li>
                <li>2000 Tour Guides</li>
                <li>Luxurious Rooms on Spaceship</li>
                <li>~ 10 Years</li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.tour_card_side} ${styles.tour_card_side_back} ${styles.tour_card_side_back_card3}`}
          >
            <div className={styles.tour_card_back_box}>
              <div className={styles.tour_card_price_box}>
                <p className={styles.tour_card_price_only}>Only</p>
                <p className={styles.tour_card_price_value}>$999.99</p>
                <p className={styles.tour_card_price_after_text}>
                  for the experience of a lifetime
                </p>
              </div>
              <MainButton message="Book Now!" />
            </div>
          </div>
        </div>
      </div>

      <MainButton message="See all tours!" location="tours_section" />
    </section>
  );
}
