"use client";

import { SiteContext } from "@/context/SiteContext";
import { navigationData } from "@/data/navigationData";
import { useActiveLinks } from "@/hooks/activeLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Navigation = ({ className, onClick }) => {
  const pathName = usePathname();
  const { setHash } = useContext(SiteContext);

  const { homeLinkClassName, pageLinkClassName } = useActiveLinks();

  return (
    <nav className={`${className}`}>
      {navigationData.map((el) => {
        return (
          <Link
            key={el.titleUa}
            href={el.href}
            onClick={() => {
              setHash(el.href);
              if (onClick) {
                onClick();
              }
            }}
            className={
              pathName === "/" ? homeLinkClassName(el) : pageLinkClassName(el)
            }
          >
            {el.titleUa}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
