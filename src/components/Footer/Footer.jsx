import React from "react";
import styles from "./Footer.module.scss";
import CsrFooterSection from "./CsrFooterSection/CsrFooterSection";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <CsrFooterSection />

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
          <p>
            Вебсайт розроблено в межах програми міжнародної співпраці
            «EU4Business: відновлення, конкурентоспроможність та
            інтернаціоналізація МСП» спільно фінансується Європейським Союзом та
            урядом Німеччини і реалізується німецькою федеральною компанією
            Deutsche Gesellschaft für Internationale Zusammenarbeit{" "}
            <abbr
              title="Deutsche Gesellschaft für Internationale Zusammenarbeit"
              translate="yes"
            >
              (GIZ)
            </abbr>{" "}
            GmbH. Програма спрямована на підтримку економічної стійкості,
            відновлення та зростання України, створення кращих умов для розвитку
            українських малих і середніх підприємств{" "}
            <abbr title="малих і середніх підприємств" translate="yes">
              {" "}
              (МСП)
            </abbr>
            , а також підтримку інновацій та експорту.
          </p>

          <p>
            EU4Business – ініціатива Європейського Союзу, яка допомагає малим і
            середнім підприємствам у країнах Східного партнерства. Детальніше:{" "}
            <a
              href="http://www.eu4business.org.ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.eu4business.org.ua
            </a>{" "}
          </p>
          <p>
            Зміст вебсайту є виключно відповідальністю найменування вашого
            підприємства і не обов'язково відображає позицію Європейського Союзу
            та уряду Німеччини.
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
