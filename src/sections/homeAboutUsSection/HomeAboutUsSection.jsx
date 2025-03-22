import React from "react";
import styles from "./HomeAboutUsSection.module.scss";

const HomeAboutUsSection = () => {
  return (
    <section className={`section ${styles.sectionAboutUs}`} id="about-us">
      <div className="container">
        <h2 className={`sectionTitle ${styles.aboutUsTitle}`}>About us</h2>
        <iframe
          className={styles.aboutUsVideo}
          // width="100%"
          // height="100%"
          src="https://www.youtube.com/embed/B1umblCgNm4"
          loading="lazy"
          title="ТУТ БУДЕ ВІДЕО"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <h3 className={styles.aboutUsSubTitle}>
          GALEN-1: Excellence in Woodcraft
        </h3>
        <p className={styles.aboutUsText}>
          We are committed to innovation, quality, and sustainability, crafting
          premium wood products with precision and expertise.{" "}
          <span className={styles.aboutUsAccent}>
            We export 100% of our products to the U.S., U.K., Germany and other
            markets.
          </span>{" "}
        </p>
        <p className={styles.aboutUsText}>
          {" "}
          From fire starters to kitchen chopping boards and wooden furniture
          panels, our products are designed for durability, functionality, and
          eco-friendliness, serving both homes and businesses worldwide.
        </p>
        <h3 className={styles.aboutUsSubTitle}>Our Journey</h3>
        <p className={styles.aboutUsText}>
          1999 –{" "}
          <span className={styles.aboutUsAccent}>Founded in Cherkasy</span>,
          specializing in high-quality wooden parquet.
        </p>
        <p className={styles.aboutUsText}>
          2013 – Expanded into{" "}
          <span className={styles.aboutUsAccent}>solid wood</span> furniture
          panels for{" "}
          <span className={styles.aboutUsAccent}>premium surfaces.</span>
        </p>
        <p className={styles.aboutUsText}>
          2019 –{" "}
          <span className={styles.aboutUsAccent}>Launched eco-friendly</span>{" "}
          wood wool fire starters, now internationally popular.
        </p>
        <p className={styles.aboutUsText}>
          2024 – Introduced oak kitchen chopping boards, blending durability
          with timeless design.
        </p>
        <p className={styles.aboutUsText}>
          <span className={styles.aboutUsAccent}>
            We continue to expand and innovate
          </span>
          , ensuring top-tier craftsmanship in every product.
        </p>
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
