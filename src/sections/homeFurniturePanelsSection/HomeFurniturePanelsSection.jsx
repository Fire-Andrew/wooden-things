"use client"
import React from 'react';
import Image from 'next/image';
import styles from './HomeFurniturePanelsSection.module.scss';
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const HomeFurniturePanelsSection = () => {
 
  const{t}=useTranslation()
 
 const[isLoading,setIsLoading]=useState(true)

 useEffect(()=>{setIsLoading(false)},[])

  return (
    <section className={`section`}>
      <div className={`container`}>
        <h2 className={`sectionTitle ${styles.title}`}>{!isLoading && t("HomeFurnitureSection.Title")}</h2>
        {!isLoading && <><p className={styles.subtitle}>
        {t("HomeFurnitureSection.Text1")}
        </p>
        <div className={styles.content}>
          <figure className={styles.imgContainers}>
            <Image
              src="/webp/furniturePanels-laptop.webp"
              alt="Меблеві Щити"
              fill={true}
              sizes="(max-width: 743px) 95vw, (max-width: 1279px) 41vw, 496px"
              loading="lazy"
            />
          </figure>
          <div>
            {/* <h3 className={styles.accentText}>
              High-quality and durable material
            </h3> */}
            <p className={styles.text}>
            {t("HomeFurnitureSection.Text2")}
            </p>
            <p className={styles.text}>
            {t("HomeFurnitureSection.Text3")}
            </p>
            <p className={styles.text}>
            {t("HomeFurnitureSection.Text4")}
            </p>
          </div>
        </div></>}
      </div>
    </section>
  );
};

export default HomeFurniturePanelsSection;
