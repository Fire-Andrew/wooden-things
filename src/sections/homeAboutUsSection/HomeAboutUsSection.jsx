"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import Image from "next/image";
import styles from "./HomeAboutUsSection.module.scss";

const HomeAboutUsSection = () => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => setIsLoad(false), []);

  const { t } = useTranslation();

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
    <section className={`section ${styles.sectionAboutUs}`}>
      <div className="container" id="about-us">
        <h2 className={`sectionTitle ${styles.aboutUsTitle}`}>
          {!isLoad && t("HomeAboutUs.TitleSection")}
        </h2>
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
        {!isLoad && (
          <>
            <h3 className={styles.aboutUsSubTitle}>
              GALEN 1: {t("HomeAboutUs.Title1")}
            </h3>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text1")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text2")}</p>
            <h3 className={styles.aboutUsSubTitle}>
              {t("HomeAboutUs.Title2")}
            </h3>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text3")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text4")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text5")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text6")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text7")}</p>

            <h3 className={styles.aboutUsSubTitle}>
              {t("HomeAboutUs.Title3")}
            </h3>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text8")}</p>
            <h3 className={styles.aboutUsSubTitle}>
              {t("HomeAboutUs.Title4")}
            </h3>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text9")}</p>
            <p className={styles.aboutUsText}>{t("HomeAboutUs.Text10")}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default HomeAboutUsSection;
