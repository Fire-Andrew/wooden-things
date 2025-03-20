"use client";

import React from "react";
import { languagesData } from "@/data/languagesData";

const Languages = ({ className }) => {
  const languages = Object.keys(languagesData);

  return (
    <ul className={className}>
      {languages.map((el, i) => {
        return <li key={i}>{el}</li>;
      })}
    </ul>
  );
};

export default Languages;
