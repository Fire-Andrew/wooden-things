"use client";

import React, { useContext } from "react";
import styles from "./CsrFooterSection.module.scss";
import Logo from "@/components/Logo/Logo";
import { useWindowResize } from "@/hooks/windowResize";
import { footerNavData } from "@/data/navigationData";
import { SiteContext } from "@/context/SiteContext";
import Navigation from "@/components/Navigation/Navigation";
import SocLinks from "@/components/SocLinks/SocLinks";

const CsrFooterSection = ({t}) => {
  const { isMobile } = useWindowResize();
  const { setHash } = useContext(SiteContext);

  return (
    <section className={`container ${styles.csrSection}`}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <address className={styles.contacts}>
            <a href="mailto:info@wood-on-fire.com">info@wood-on-fire.com</a>

            <table>
              <tbody>
                <tr>
                  <th scope="row" className={styles.tel}>
                    {t('FooterSection.Phone')}{" "}
                  </th>
                  <td>
                    {" "}
                    <a href="tel:+380474062249">+380 47 406 2249 </a>
                  </td>
                </tr>

                {/* <tr>
                  <th scope="row"></th>
                  <td>
                    {" "}
                    <a href="tel:+380674702618">+380 67 470 2618</a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </address>
          {isMobile && (
            <>
              <SocLinks />
              <p className={styles.aboutUs}>
                {}
              </p>
            </>
          )}
        </div>
        <div className={styles.content}>
          <h3>{t('FooterSection.ContactUs')}</h3>
          <p>{t('FooterSection.Region')}</p>
          <p>{t('FooterSection.City')}</p>
          <p>{t('FooterSection.Street')}</p>
        </div>
        <div className={styles.content}>
          <h3>{t('FooterSection.Menu')}</h3>

          <Navigation
            className={styles.nav}
            onClick={() => {
              setHash(el.href);
            }}
            data={footerNavData}
          />
        </div>
      </div>
      {!isMobile && (
        <>
          <SocLinks />

          <p className={styles.aboutUs}>
            {t("FooterSection.FooterContactsText")}
          </p>
        </>
      )}
    </section>
  );
};

export default CsrFooterSection;
