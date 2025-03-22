"use client";

import React from "react";
import { v4 } from 'uuid';
import { languagesData } from "@/data/languagesData";

const Languages = ({ className, changeLanguage, currentLanguage }) => {
  const languages = Object.values(languagesData);

  const changeLang=(el)=>{
console.log(changeLang.target)
  }

  return (
    <ul className={className}>
      {languages.map((el) => {
      return <li key={v4()} onClick={changeLang}>{el}</li>;
      })}
    </ul>
  );
};

export default Languages;
