"use client";

import { SiteContext } from "@/context/SiteContext";
import { useActiveLinks } from "@/hooks/activeLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Navigation = ({ className, onClick, data }) => {
  const pathName = usePathname();
  const { setHash } = useContext(SiteContext);

  const { homeLinkClassName, pageLinkClassName } = useActiveLinks();

  return (
    <nav className={`${className}`}>
      {data.map((el, i) => {
        return (
          <Link
            key={i}
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
            {el.titleEn}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
