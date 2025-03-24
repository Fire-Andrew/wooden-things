import { socLinks } from "@/data/socLinksData";
import Link from "next/link";
import React from "react";
import styles from "./SocLinks.module.scss";
import Image from "next/image";

const SocLinks = () => {
  return (
    <ul className={styles.socLinks}>
      {socLinks.map((el) => {
        return (
          <Link key={el.title} href={el.href} className={styles.socLinkItem}>
            <Image
              src={el.icon}
              fill
              sizes="(max-width: 744px) 24px, 32px"
              alt={el.title}
            />
          </Link>
        );
      })}
    </ul>
  );
};

export default SocLinks;
