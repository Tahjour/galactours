// components\00_main-navigation\main-navigation.tsx
import { useRef, useState } from "react";
import styles from "./main-navigation.module.scss";
import { selectSectionAndScroll } from "../UI/smooth-scrolling/select-section-and-scroll";

export default function MainNavigation() {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleLiClick = (sectionID: string) => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    selectSectionAndScroll(sectionID);
  };
  return (
    <div className={styles.main_navigation}>
      <input
        ref={checkboxRef}
        type="checkbox"
        className={styles.main_navigation_checkbox}
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" className={styles.main_navigation_button}>
        <span className={styles.main_navigation_icon}></span>
      </label>

      <div className={styles.main_navigation_background}>&nbsp;</div>

      <nav className={styles.main_navigation_nav_box}>
        <ul className={styles.main_navigation_list}>
          <li
            className={styles.main_navigation_list_item}
            onClick={() => {
              handleLiClick("about_section");
            }}
          >
            <button className={styles.main_navigation_list_button}>About Galactours</button>
          </li>
          <li
            className={styles.main_navigation_list_item}
            onClick={() => {
              handleLiClick("features_section");
            }}
          >
            <button className={styles.main_navigation_list_button}>Your Benefits</button>
          </li>
          <li
            className={styles.main_navigation_list_item}
            onClick={() => {
              handleLiClick("tours_section");
            }}
          >
            <button className={styles.main_navigation_list_button}>Popular Tours</button>
          </li>
          <li
            className={styles.main_navigation_list_item}
            onClick={() => {
              handleLiClick("stories_section");
            }}
          >
            <button className={styles.main_navigation_list_button}>Traveler Stories</button>
          </li>
          <li
            className={styles.main_navigation_list_item}
            onClick={() => {
              handleLiClick("booking_section");
            }}
          >
            <button className={styles.main_navigation_list_button}>Book Now</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
