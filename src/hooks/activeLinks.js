"use client";

import { SiteContext } from "@/context/SiteContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";

export const useActiveLinks = () => {
  const pathName = usePathname();
  const isClient = typeof window !== "undefined";
  const { hash } = useContext(SiteContext);

  const homeLinkClassName = (el) => {
    if (isClient && hash === el.href) {
      return `activeLink`;
    } else {
      return `hoverLink`;
    }
  };

  const pageLinkClassName = (el) => {
    if ((isClient && pathName === el.href) || pathName.startsWith(el.href)) {
      return `activeLink`;
    } else {
      return `hoverLink`;
    }
  };

  return { homeLinkClassName, pageLinkClassName };
};
