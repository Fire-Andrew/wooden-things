"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HomeAboutUsSection.module.scss";

const HomeAboutUsSection = () => {
  // useEffect(() => setIsLoading(false), []);

  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // const videoLink = "https://www.youtube.com/embed/B1umblCgNm4";
  // const getImageForYoutubePreload = (url) => {
  //   const embedIndex = url.indexOf("/embed/");
  //   if (embedIndex === -1) {
  //     return "/images/defaultYoutubeImg.webp";
  //   }

  //   const videoIdName = url.slice(embedIndex + 7);

  //   return `https://img.youtube.com/vi/${videoIdName}/hqdefault.jpg`;

  //   const imageSrcForYoutube = getImageForYoutubePreload(videoLink);
  // };

  return (
    <section className={`section ${styles.sectionAboutUs}`} id="about-us">
      <div className="container">
        <h2 className={`sectionTitle ${styles.aboutUsTitle}`}>About us</h2>
        {/* <div className={styles.videoWrapper}>
          {!isVideoLoaded ? (
            <div
              className={styles.previewContainer}
              onClick={() => setIsVideoLoaded(true)}
            >
              <Image className={styles.previewImage} src={imageSrcForYoutube} />
            </div>
          ) : (
            <iframe
              className={styles.aboutUsVideo}
              // width="100%"
              // height="100%"
              src="https://www.youtube.com/embed/B1umblCgNm4"
              loading="lazy"
              title="ТУТ БУДЕ ВІДЕО"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div> */}
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
          GALEN 1: Excellence in Woodcraft
        </h3>
        <p className={styles.aboutUsText}>
          We are committed to innovation, quality, and sustainability, crafting
          premium wood products with precision and expertise. We export 100% of
          our products to the U.S., U.K., Germany and other markets.
        </p>
        <p className={styles.aboutUsText}>
          From fire starters to kitchen chopping boards and wooden furniture
          panels, our products are designed for durability, functionality, and
          eco-friendliness, serving both homes and businesses worldwide.
        </p>
        <h3 className={styles.aboutUsSubTitle}>Our Journey</h3>
        <p className={styles.aboutUsText}>
          1999 – Founded in Cherkasy, specializing in high-quality wooden
          parquet.
        </p>
        <p className={styles.aboutUsText}>
          2013 – Expanded into solid wood furniture panels for premium surfaces.
        </p>
        <p className={styles.aboutUsText}>
          2019 – Launched eco-friendly wood wool fire starters, now
          internationally popular.
        </p>
        <p className={styles.aboutUsText}>
          2024 – Introduced oak kitchen chopping boards, blending durability
          with timeless design.
        </p>
        <p className={styles.aboutUsText}>
          We continue to expand and innovate, ensuring top-tier craftsmanship in
          every product.
        </p>

        <h3 className={styles.aboutUsSubTitle}>Sustainability & Growth</h3>
        <p className={styles.aboutUsText}>
          We source wood from FSC-certified forests, ensuring eco-friendly
          production and responsible forestry.
        </p>
        <h3 className={styles.aboutUsSubTitle}>
          To enhance global logistics, we are:
        </h3>
        <p className={styles.aboutUsText}>
          Establishing an EU Company - Improving customer service and operations
          within Europe.
        </p>
        <p className={styles.aboutUsText}>
          Expanding EU Distribution - Setting up a warehouse in Poland for
          faster, cost-effective deliveries.
        </p>
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
