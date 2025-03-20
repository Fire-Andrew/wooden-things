'use client';

import Image from 'next/image';
import { useWindowResize } from '@/hooks/windowResize';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const { isDesktop, isTablet, isMobile } = useWindowResize();
  return (
    <section className={styles.hero}>
      <div className={styles.boardContainer}>
        <figure className={styles.imgBoard}>
          <Image src="/png/board-home.png" alt="board" fill={true} />
        </figure>
        <figure className={styles.imgArrow}>
          <Image
            src={
              isMobile
                ? '/png/arrow-home-mobile.png'
                : isTablet
                ? '/png/arrow-home-tablet.png'
                : '/png/arrow-home-desk.png'
            }
            alt="arrow"
            fill={true}
          />
        </figure>
        <h2 className={`sectionTitle ${styles.title}`} >Дошки</h2>
        <ul className={styles.textContainer}>
          <li>
            Зважаючи на велику кількість виробників ми приділяємо особливу увагу
            якості нашої продукції.
          </li>
          <li>
            Саме тому 100% наших виробів експортується до Сполучених Штатів
            Америки, Великої Британії, Німеччини, Нідерландів, Данії та Франції.
          </li>
          <li>
            У виробничих процесах ми використовуємо найсучасніші машини та
            обладнання провідних світових виробників.
          </li>
        </ul>
        <ReviewBtn href="kitchen-boards" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;
