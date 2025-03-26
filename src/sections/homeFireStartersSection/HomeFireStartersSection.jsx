
"use client"
import React from 'react';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import styles from './HomeFireStartersSection.module.scss';
import { useTranslation } from 'react-i18next';
import { useState,useEffect } from 'react';


const HomeFireStartersSection = () => {
  const[isLoad,setIsLoad]=useState(true);
  const{t}=useTranslation();

  useEffect(()=>{setIsLoad(false)},[])

  return (
    <section className={`section ${styles.container}`}>
      <div className={` container ${styles.ignitersContent}`}>
        <h2 className={`sectionTitle ${styles.title}`}>{!isLoad && t("HomeFireSection.Title")}</h2>
        {!isLoad && <ul className={styles.content}>
          <li>
          {t("HomeFireSection.Text1")}
          </li>
          <li>
          {t("HomeFireSection.Text2")}
          </li>
        </ul>}
        <ReviewBtn href="fire-starters" id={styles.btn} />
      </div>
    </section>
    
  );

};

export default HomeFireStartersSection;