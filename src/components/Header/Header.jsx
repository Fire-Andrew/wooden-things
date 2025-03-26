"use client";

import { useWindowResize } from "@/hooks/windowResize";
import React from "react";
import styles from "./Header.module.scss";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import TranslatorBtnBlock from "../TranslatorBtnBlock/TranslatorBtnBlock";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useCloseMenu } from "@/hooks/closeMenu";
import { navigationData } from "@/data/navigationData";
import { useState, useEffect } from "react";

const Header = () => {
  const { isLaptop } = useWindowResize();
  const [isLoad, setIsLoad] = useState(true);
  const { handleClick } = useCloseMenu();
  useEffect(() => {
    setIsLoad(false);
  }, []);
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

        {!isLoad && isLaptop && (
          <TranslatorBtnBlock
            className={styles.langSwitch}
            isLaptop={isLaptop}
          />
        )}
        {/* {!isMobile && <Languages className={styles.langSwitch}/>} */}

        {!isLaptop && <BurgerBtn />}
      </div>

      {!isLoad && !isLaptop && <MobileMenu />}
    </header>
  );
};

export default Header;
