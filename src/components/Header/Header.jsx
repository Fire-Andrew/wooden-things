"use client";

import { navigationData } from "@/data/navigationData";
import { useWindowResize } from "@/hooks/windowResize";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";

const Header = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />

        {isDesktop && (
          <nav>
            {navigationData.map((el) => {
              return <Link href={el.href}>{el.titleUa}</Link>;
            })}
          </nav>
        )}

        {!isDesktop && <BurgerBtn />}
      </div>
    </header>
  );
};

export default Header;
