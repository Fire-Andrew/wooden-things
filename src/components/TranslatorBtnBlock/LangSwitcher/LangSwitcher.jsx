"use client";

import React from "react";
// import { v4 } from 'uuid';
import { languagesData } from "@/data/languagesData";

const LangSwitcher = ({ className, changeLanguage, currentLanguage, mobile }) => {

const sortedLanguages = [
    currentLanguage, 
    ...Object.values(languagesData).filter(lang => lang !== currentLanguage)
];
  
  return (
    <ul className={className}>
      {!mobile ? (sortedLanguages.map((el) => {
      return <li 
      // key={v4()}
      key={el}
      onClick={()=>changeLanguage(el)}>{el}</li>;
      })) : 
      (Object.values(languagesData).map((el) => {
        return <li 
        // key={v4()}
        key={el}
        onClick={()=>changeLanguage(el)}>{el}</li>;
        }))}
    </ul>
  );
};

export default LangSwitcher;
