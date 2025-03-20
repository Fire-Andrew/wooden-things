"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ onClick }) => {
  return (
    <Link href="/" className={styles.logo} onClick={onClick}>
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
