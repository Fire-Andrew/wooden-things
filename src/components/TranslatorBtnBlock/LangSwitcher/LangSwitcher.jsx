"use client";

import React from "react";
import { v4 } from 'uuid';
import { languagesData } from "@/data/languagesData";

const LangSwitcher = ({ 
  className, 
  changeLanguage, 
  // currentLanguage
 }) => {
  
  const languages = Object.values(languagesData);

  return (
    <ul className={className}>
      {languages.map((el) => {
      return <li key={v4()}
      onClick={()=>changeLanguage(el)}>{el}</li>;
      })}
    </ul>
  );
};

export default LangSwitcher;
