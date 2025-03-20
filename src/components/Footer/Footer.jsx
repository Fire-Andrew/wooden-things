import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`section ${styles.footer}`}>
      <div className="container"></div>
      <p className={styles.allRights}>
        © All rights reserved by{" "}
        <a href="https://www.webevery.dev/">Webevery.dev</a> 2025
      </p>
      <div className="container"></div>
    </footer>
  );
};

export default Footer;
