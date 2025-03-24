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
          <li key={el.title}>
            <a href={el.href} className={styles.socLinkItem} target="_blank">
              <Image
                src={el.icon}
                fill
                sizes="(max-width: 744px) 24px, 32px"
                alt={el.title}
                className={styles[el.title]}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocLinks;
