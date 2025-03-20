"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu, mobileMenuContent, setmobileMenuContent } =
    useContext(SiteContext);

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setmobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 500);
    } else {
      setMobileMenu(true);

      setTimeout(() => {
        setmobileMenuContent(true);
      }, 500);
    }
  };

  return (
    <button className={styles.burgerBtn} onClick={toggleMobileMenu}>
      {mobileMenuContent ? (
        <div className={styles.cross}></div>
      ) : (
        <svg className={styles.burger}>
          <use href="/sprite.svg#icon-burgerbtn"></use>
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
