"use client";

import { navigationData } from "@/data/navigationData";
import Link from "next/link";
import React from "react";

const Navigation = ({ className, onClick }) => {
  return (
    <nav className={`${className}`}>
      {navigationData.map((el) => {
        return (
          <Link key={el.titleUa} href={el.href} onClick={onClick}>
            {el.titleUa}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
