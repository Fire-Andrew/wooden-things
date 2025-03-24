"use client";

import React, { useContext } from "react";
import styles from "./CsrFooterSection.module.scss";
import Logo from "@/components/Logo/Logo";
import { useWindowResize } from "@/hooks/windowResize";
import { footerNavData } from "@/data/navigationData";
import { SiteContext } from "@/context/SiteContext";
import Navigation from "@/components/Navigation/Navigation";

const CsrFooterSection = () => {
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
                    Phone:{" "}
                  </th>
                  <td>
                    {" "}
                    <a href="tel:+380474062249">+380 47 406 2249 </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row"></th>
                  <td>
                    {" "}
                    <a href="tel:+380674702618">+380 67 470 2618</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </address>
          {isMobile && (
            <p className={styles.abourUs}>
              We welcome inquiries from wholesale buyers, distributors, and
              retailers who are interested in premium wood products. Get in
              touch with us for more information, pricing, and partnership
              opportunities!
            </p>
          )}
        </div>
        <div className={styles.content}>
          <h3>Contacts</h3>
          <p>Ukraine – Cherkasy region</p>
          <p>20251, Bahacheve</p>
          <p>3a Yevhena Ivanchenka St.</p>
        </div>
        <div className={styles.content}>
          <h3>Menu</h3>

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
        <p className={styles.abourUs}>
          We welcome inquiries from wholesale buyers, distributors, and
          retailers who are interested in premium wood products. Get in touch
          with us for more information, pricing, and partnership opportunities!
        </p>
      )}
    </section>
  );
};

export default CsrFooterSection;
