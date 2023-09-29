import { Lato } from "next/font/google";
import HeaderSection from "../1_header_section/header-section";
import AboutSection from "../2_about_section/about-section";
import FeaturesSection from "../3_features_section/features-section";
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});
import styles from "./main-layout.module.scss";
import ToursSection from "../4_tours_section/tours-section";
import StoriesSection from "../5_stories_section/stories-section";
import BookingSection from "../6_booking_section/booking-section";

export default function MainLayout() {
  return (
    <section className={`${styles.main_layout_section} ${lato.className}`}>
      <HeaderSection />
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection />
      <BookingSection />
    </section>
  );
}
