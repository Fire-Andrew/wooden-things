"use client";

import React, { useContext, useEffect } from "react";
import styles from "./MobileMenu.module.scss";

import { SiteContext } from "@/context/SiteContext";
import TranslatorBtnBlock from "@/components/TranslatorBtnBlock/TranslatorBtnBlock";
import Navigation from "@/components/Navigation/Navigation";
import { useCloseMenu } from "@/hooks/closeMenu";
import { useWindowResize } from "@/hooks/windowResize";
import { navigationData } from "@/data/navigationData";

const MobileMenu = () => {
  const { mobileMenu, mobileMenuContent } = useContext(SiteContext);
  const { handleClick } = useCloseMenu();
  const { isMobile, isLaptop } = useWindowResize();

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
        {!isLaptop && (
          <TranslatorBtnBlock
            className={styles.languages}
            isLaptop={isLaptop}
          />
        )}

        <Navigation
          className={styles.nav}
          onClick={handleClick}
          data={navigationData}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
