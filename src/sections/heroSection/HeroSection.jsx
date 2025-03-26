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
        <h2 className={`sectionTitle ${styles.title}`}>Boards</h2>
        <ul className={styles.textContainer}>
          <li>
            With a highly competitive market, we set ourselves apart by
            delivering exceptional quality.
          </li>
          <li>
            This commitment has earned us a strong global presence, with 100% of
            our products exported to the United States, Great Britain, Germany,
            the Netherlands, Denmark, and France.
          </li>
          <li>
            Using state-of-the-art machinery from leading global manufacturers,
            we ensure precision, efficiency, and uncompromising craftsmanship in
            every product.
          </li>
        </ul>
        <ReviewBtn href="kitchen-boards" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;

// 'use client';

// import Image from 'next/image';
// import { useWindowResize } from '@/hooks/windowResize';
// import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
// import styles from './HeroSection.module.scss';
// import { useTranslation } from 'react-i18next';
// import { useEffect, useState } from 'react';

// const HeroSection = () => {
//   const { isTablet, isMobile } = useWindowResize();
//   const[isLoad,setIsLoad]=useState(true)
//   const {t}=useTranslation();

//   useEffect(()=>{ setIsLoad(false)},[])

//   return (
//     <section className={styles.hero} id="hero">
//       <div className={styles.boardContainer}>
//         <h1 className={styles.titleHidden}>Gallen 1 LLC</h1>
//         <figure className={styles.imgBoard}>
//           <Image
//             src="/webp/board-home.webp"
//             alt="board"
//             fill={true}
//             sizes="(max-width: 743px) 154px, (max-width: 1279px) 286px, 650px"
//             loading='eager'
//             priority
//           />
//         </figure>
//         <figure className={styles.imgArrow}>
//           <Image
//             src={
//               isMobile
//                 ? '/webp/arrow-home-mobile.webp'
//                 : isTablet
//                 ? '/webp/arrow-home-tablet.webp'
//                 : '/webp/arrow-home-desk.webp'
//             }
//             alt="arrow"
//             fill={true}
//             sizes="(max-width: 743px) 132px, (max-width: 806px) 258px, (max-width: 919px) 228px, (max-width: 1279px) 188px, 330px"
//             loading='eager'
//             priority
//           />
//         </figure>
//         <h2 className={`sectionTitle ${styles.title}`}>{!isLoad && t('Hero.Title')}</h2>
//         {!isLoad && <ul className={styles.textContainer}>
//           <li>
//           {t('Hero.Text1')}
//           </li>
//           <li>
//           {t('Hero.Text2')}
//           </li>
//           <li>
//           {t('Hero.Text3')}
//           </li>
//         </ul>}
//         <ReviewBtn href="kitchen-boards" id={styles.btn} />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
