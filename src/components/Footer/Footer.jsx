"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import CsrFooterSection from "./CsrFooterSection/CsrFooterSection";
import Image from "next/image";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <footer className={styles.footer} id="contacts">
      {!isLoading && <CsrFooterSection t={t} />}

      <section className={`container ${styles.ssrSection}`}>
        <h3 className={styles.allRights}>
          © All rights reserved by{" "}
          <a href="https://www.webevery.dev/">Webevery.dev</a> 2025
        </h3>
        <div className={styles.imgWrap}>
          <Image
            src="/images/footerImg.webp"
            sizes="(max-width: 1280px) 90vw, 80vw"
            fill
            alt="Sponsrs&Partners"
          />
        </div>
        <article className={styles.aboutSponsors}>
          {!isLoading && (
            <>
              <p>
                {t("FooterSection.Text1")}
                <abbr
                  title="Deutsche Gesellschaft für Internationale Zusammenarbeit"
                  translate="yes"
                >
                  (GIZ)
                </abbr>{" "}
                {t("FooterSection.Text2")}
                <abbr title="малих і середніх підприємств" translate="yes">
                  {" "}
                  (SME)
                </abbr>
                , {t("FooterSection.Text3")}
              </p>

              <p>
                {t("FooterSection.Text4")}{" "}
                <a
                  href="http://www.eu4business.org.ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.eu4business.org.ua
                </a>{" "}
              </p>
              <p>{t("FooterSection.Text5")}</p>
            </>
          )}
        </article>
      </section>
    </footer>
  );
};

export default Footer;
