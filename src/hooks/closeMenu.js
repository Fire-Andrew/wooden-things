"use client";
import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";

export const useCloseMenu = () => {
  const { mobileMenu, setMobileMenu, setmobileMenuContent } =
    useContext(SiteContext);

  const handleClick = () => {
    if (mobileMenu) {
      setmobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 500);
    } else {
      return;
    }
  };

  return { handleClick };
};
