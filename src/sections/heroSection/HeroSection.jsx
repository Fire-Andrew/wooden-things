'use client';

import Image from 'next/image';
import { useWindowResize } from '@/hooks/windowResize';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import styles from './HeroSection.module.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { isTablet, isMobile } = useWindowResize();
  const[isLoad,setIsLoad]=useState(true)
  const {t}=useTranslation();

  useEffect(()=>{ setIsLoad(false)},[])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.boardContainer}>
        <h1 className={styles.titleHidden}>Gallen 1 LLC</h1>
        <figure className={styles.imgBoard}>
          <Image
            src="/webp/board-home.webp"
            alt="board"
            fill={true}
            sizes="(max-width: 743px) 154px, (max-width: 1279px) 286px, 650px"
            loading='eager'
            priority
          />
        </figure>
        <figure className={styles.imgArrow}>
          <Image
            src={
              isMobile
                ? '/webp/arrow-home-mobile.webp'
                : isTablet
                ? '/webp/arrow-home-tablet.webp'
                : '/webp/arrow-home-desk.webp'
            }
            alt="arrow"
            fill={true}
            sizes="(max-width: 743px) 132px, (max-width: 806px) 258px, (max-width: 919px) 228px, (max-width: 1279px) 188px, 330px"
            loading='eager'
            priority
          />
        </figure>
        <h2 className={`sectionTitle ${styles.title}`}>{!isLoad && t('Hero.Title')}</h2>
        <ul className={styles.textContainer}>
          <li>
            {!isLoad && t('Hero.Text1')}
          </li>
          <li>
          {!isLoad && t('Hero.Text2')}
          </li>
          <li>
          {!isLoad && t('Hero.Text3')}
          </li>
        </ul>
        <ReviewBtn href="kitchen-boards" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;
