"use client";

import { useWindowResize } from "@/hooks/windowResize";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import { useCloseMenu } from "@/hooks/closeMenu";

// import Languages from "../Languages/Languages";
import TranslatorBtnBlock from "../TranslatorBtnBlock/TranslatorBtnBlock";
import Languages from "../Languages/Languages";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isMobile, isLaptop } = useWindowResize();

  const { handleClick } = useCloseMenu();

  // const [showLang, setShowLang] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo onClick={handleClick} className={styles.logo} />

        {isLaptop && (
          <Navigation className={styles.nav} onClick={handleClick} />
        )}

        {!isMobile && <TranslatorBtnBlock className={styles.langSwitch} />}

        {!isLaptop && <BurgerBtn />}
      </div>

      {!isLaptop && <MobileMenu />}
    </header>
  );
};

export default Header;
