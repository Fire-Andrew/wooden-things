'use client';

import Image from 'next/image';
import { useWindowResize } from '@/hooks/windowResize';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const { isTablet, isMobile } = useWindowResize();
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.boardContainer}>
        <h1 className={styles.titleHidden}>Gallen 1 LLC</h1>
        <figure className={styles.imgBoard}>
          <Image
            src="/webp/board-home.webp"
            alt="board"
            fill={true}
            sizes="(max-width: 744px) 286px, (max-width: 1280px) 650px"
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
            sizes="(max-width: 744px) 258px, (max-width: 1280px) 330px"
          />
        </figure>
        <h2 className={`sectionTitle ${styles.title}`}>Boards</h2>
        <ul className={styles.textContainer}>
          <li>
            Given the large number of manufacturers, we pay special attention to
            the quality of our products.
          </li>
          <li>
            That is why 100% of our products are exported to the United States,
            Great Britain, Germany, the Netherlands, Denmark and France.
          </li>
          <li>
            In our production processes, we use the most modern machines and
            equipment from leading world manufacturers.
          </li>
        </ul>
        <ReviewBtn href="kitchen-boards" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;
