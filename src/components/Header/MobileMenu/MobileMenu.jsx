"use client";

import React, { useContext, useEffect } from "react";
import styles from "./MobileMenu.module.scss";

import { SiteContext } from "@/context/SiteContext";
import Navigation from "@/components/Navigation/Navigation";
import { useCloseMenu } from "@/hooks/closeMenu";
import Languages from "@/components/Languages/Languages";

const MobileMenu = () => {
  const { mobileMenu, mobileMenuContent } = useContext(SiteContext);
  const { handleClick } = useCloseMenu();

  useEffect(() => {
    if (window !== undefined && mobileMenu) {
      document.body.classList.add("stopBodyScroll");
    }

    return () => {
      document.body.classList.remove("stopBodyScroll");
    };
  }, [mobileMenu]);

  return (
    <div className={mobileMenu ? `${styles.mobMenu}` : `${styles.mobMenuNone}`}>
      <div
        className={
          mobileMenuContent
            ? `${styles.content} ${styles.contentVisible}`
            : styles.content
        }
      >
        <Languages className={styles.languages} />

        <Navigation className={styles.nav} onClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileMenu;
