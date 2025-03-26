"use client";

import { SiteContext } from "@/context/SiteContext";
import { languagesData } from "@/data/languagesData";
import { useActiveLinks } from "@/hooks/activeLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';


const Navigation = ({ className, onClick, data }) => {
  const pathName = usePathname();
  const { setHash } = useContext(SiteContext);

  const { homeLinkClassName, pageLinkClassName } = useActiveLinks();

  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);  
  useEffect(()=>{setIsLoading(false)},[]);
  

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
            {/* {el.titleEn} */}
            {!isLoading && ((i18n.language === languagesData.EN) && el.titleEn) || ((i18n.language === languagesData.DE) && el.titleDe) || el.titleUa}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
