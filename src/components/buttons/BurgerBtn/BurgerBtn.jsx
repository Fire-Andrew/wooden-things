"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);

  return (
    <button className={styles.burgerBtn}>
      <svg>
        <use href="/sprite.svg#icon-burgerbtn"></use>
      </svg>
    </button>
  );
};

export default BurgerBtn;
