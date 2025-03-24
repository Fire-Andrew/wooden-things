"use client";

import { useWindowResize } from "@/hooks/windowResize";
import React from "react";
import styles from "./Header.module.scss";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useCloseMenu } from "@/hooks/closeMenu";
import TranslatorBtnBlock from "../TranslatorBtnBlock/TranslatorBtnBlock";
import { navigationData } from "@/data/navigationData";

const Header = () => {
  const { isMobile, isLaptop } = useWindowResize();

  const { handleClick } = useCloseMenu();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo onClick={handleClick} className={styles.logo} />

        {isLaptop && (
          <Navigation
            className={styles.nav}
            onClick={handleClick}
            data={navigationData}
          />
        )}
        
        {!isMobile && <TranslatorBtnBlock className={styles.langSwitch} />}
        
        {!isLaptop && <BurgerBtn />}
      </div>

      {!isLaptop && <MobileMenu />}
    </header>
  );
};

export default Header;
