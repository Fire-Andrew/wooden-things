"use client";

import React from "react";
import { v4 } from 'uuid';
import styles from "./LangSwitch.module.scss";
import { languagesData } from "@/data/languagesData";

const Languages = ({ className, changeLanguage, currentLanguage }) => {
  const languages = Object.values(languagesData);

  return (
    <ul className={styles.langSwitch}>
      {languages.map((el) => {
      return <li key={v4()} onClick={()=>changeLanguage(el)}>{el}</li>;
      })}
    </ul>
  );
};

export default Languages;
