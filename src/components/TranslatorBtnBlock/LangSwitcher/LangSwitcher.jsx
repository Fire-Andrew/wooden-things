"use client";

import React from "react";
// import { v4 } from 'uuid';
import { languagesData } from "@/data/languagesData";

const LangSwitcher = ({
  className,
  changeLanguage,
  currentLanguage,
  isLaptop,
  language,
  linkId,
}) => {
  const sortedLanguages = [
    currentLanguage,
    ...Object.values(languagesData).filter((lang) => lang !== currentLanguage),
  ];

  return (
    <ul className={className}>
      {isLaptop
        ? sortedLanguages.map((el) => {
            return (
              <li
                // key={v4()}
                key={el}
                onClick={() => changeLanguage(el)}
                id={language === el ? linkId : null}
              >
                {el}
              </li>
            );
          })
        : Object.values(languagesData).map((el) => {
            return (
              <li
                // key={v4()}
                key={el}
                onClick={() => changeLanguage(el)}
                id={language === el ? linkId : null}
              >
                {el}
              </li>
            );
          })}
    </ul>
  );
};

export default LangSwitcher;
