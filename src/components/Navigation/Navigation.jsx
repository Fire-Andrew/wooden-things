"use client";

import { SiteContext } from "@/context/SiteContext";
import { languagesData } from "@/data/languagesData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navigation = ({ className, onClick, data }) => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const pathname = usePathname();

  const { currentHash, setCurrentHash } = useContext(SiteContext);

  // Track hash changes

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    updateHash(); // Set initial hash

    return () => window.removeEventListener("hashchange", updateHash);
    window.removeEventListener("popstate", updateHash);
  }, [pathname]);

  const pageLinkClassName = (path) => {
    if (pathname === path) {
      return "activeLink";
    } else {
      return "";
    }
  };

  const homeLinkClassName = (path) => {
    if (currentHash === path.slice(1)) {
      return "activeLink";
    } else {
      return "";
    }
  };

  return (
    <nav className={`${className}`}>
      {data.map((el, i) => {
        return (
          <Link
            key={i}
            href={el.href}
            onMouseOver={(e) => {
              e.target.classList.add("hoverLink");
            }}
            onMouseOut={(e) => {
              e.target.classList.remove("hoverLink");
            }}
            onClick={() => {
              setCurrentHash(el.href.slice(1));

              if (onClick) {
                onClick;
              }
            }}
            className={
              pathname !== "/"
                ? pageLinkClassName(el.href)
                : homeLinkClassName(el.href)
            }
          >
            {/* {el.titleEn} */}
            {(!isLoading && i18n.language === languagesData.DE && el.titleDe) ||
              (i18n.language === languagesData.EN && el.titleEn) ||
              (i18n.language === languagesData.ES && el.titleEs) ||
              (i18n.language === languagesData.FR && el.titleFr) ||
              (i18n.language === languagesData.IT && el.titleIt) ||
              el.titleUa}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
