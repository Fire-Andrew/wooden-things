"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./Logo.module.scss";
import { SiteContext } from "@/context/SiteContext";

const Logo = ({ onClick, className }) => {
  const { hash, setHash } = useContext(SiteContext);
  return (
    <Link
      href="/"
      className={`${styles.logo} ${className}`}
      onClick={() => {
        setHash("/");
      }}
    >
      <Image
        src="/images/logo.webp"
        fill
        alt="Galen 1 LLC"
        sizes="33vw"
        priority={true}
      />
    </Link>
  );
};

export default Logo;
