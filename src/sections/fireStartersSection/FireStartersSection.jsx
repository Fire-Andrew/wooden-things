"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from './FireStartersSection.module.scss';


const FireStartersSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{setIsLoading(false)}, []);


  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>{!isLoading && t('FireStartersPage.Title')}</h2>

      <div className={styles.productContainer}>
        <figure className={styles.igniterImg}>
          <Image          
            src="/images/lighter-igniter-pg.webp" 
            alt="fire starter"
            // layout="fill"
            fill={true}
            sizes="(max-width: 743px) 258px, (max-width: 1279px) 30vw, 272px"  
            priority
            decoding="async" />
        </figure>
        <div className={styles.descContainerIgnitor}>
          <ul className={styles.igniterPropertyList}>
            <li>{!isLoading && t('FireStartersPage.Text-1-1')}</li>
            <li>{!isLoading && t('FireStartersPage.Text-1-2')}</li>
            <li>{!isLoading && t('FireStartersPage.Text-1-3')}</li>
            <li>{!isLoading && t('FireStartersPage.Text-1-4')}</li>
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersImg}>
          <Image 
          src="/images/lighters-igniter-pg.webp" 
          alt="fire starters" 
          fill={true} 
          sizes="(max-width: 743px) 337px, (max-width: 1279px) 360px, 644px"  
          />
        </figure>
        <div className={styles.descContainerIgnitors}>
          <ul className={styles.igniterPropertyList}>
            <li>{!isLoading && t('FireStartersPage.Text-2-1')}</li>
            <li>{!isLoading && t('FireStartersPage.Text-2-2')}</li>
            <li>{!isLoading && t('FireStartersPage.Text-2-3')}</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersPackImg}>
          <Image  
          src="/images/lightersPacked-igniter-pg.webp" 
          alt="fire starters in pack" 
          fill={true} 
          sizes="(max-width: 743px) 249px, (max-width: 1279px) 33vw, 380px"    
          />
        </figure>
        <div className={styles.descContainerIgnitorsPack}>
          <p className={styles.igniterPropertyText}>{!isLoading && t('FireStartersPage.Text-3')}</p>
        </div>
      </div>
      </div>
    </section>
  )
}


export default FireStartersSection;