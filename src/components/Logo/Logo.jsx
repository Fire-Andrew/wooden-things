import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/images/logo.webp" fill />
    </Link>
  );
};

export default Logo;
