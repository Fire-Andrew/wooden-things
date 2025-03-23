import React from "react";
import styles from "./Footer.module.scss";
import CsrFooterSection from "./CsrFooterSection/CsrFooterSection";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CsrFooterSection />

      <section className={`container ${styles.ssrSection}`} id="contacts">
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
          <p>
            Website developed within the framework of international cooperation
            program "EU4Business: recovery, competitiveness and
            Internationalization of RCI" jointly funded by the European Union
            and by the German government and implemented by a German federal
            company Deutsche Gesellschaft für Internationale Zusammenarbeit
            <abbr
              title="Deutsche Gesellschaft für Internationale Zusammenarbeit"
              translate="yes"
            >
              (GIZ)
            </abbr>{" "}
            GmbH. The program aims to support economic sustainability,
            restoration and growth of Ukraine, creation of better conditions for
            development Ukrainian Small and Medium Enterprises
            <abbr title="малих і середніх підприємств" translate="yes">
              {" "}
              (SME)
            </abbr>
            , as well as support for innovation and export
          </p>

          <p>
            EU4Business is an initiative of the European Union that helps small
            and medium-sized enterprises in the Eastern Partnership countries.
            Details:{" "}
            <a
              href="http://www.eu4business.org.ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.eu4business.org.ua
            </a>{" "}
          </p>
          <p>
            The content of the website is solely the responsibility of the name
            of your enterprises and does not necessarily reflect the position of
            the European Union and the German government.
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
