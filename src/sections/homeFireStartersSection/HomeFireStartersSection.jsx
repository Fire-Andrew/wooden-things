// import React from 'react';
// import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
// import styles from './HomeFireStartersSection.module.scss';

// const HomeFireStartersSection = () => {
//   return (
//     <section className={`section ${styles.container}`}>
//       <div className={` container ${styles.ignitersContent}`}>
//         <h2 className={`sectionTitle ${styles.title}`}>Fire Starters</h2>
//         <ul className={styles.content}>
//           <li>
//             Made from dry wood shavings and purified wax, our chemical-free,
//             eco-friendly fire starters provide a strong, reliable ignition in
//             any weather.
//           </li>
//           <li>
//             We hold patents and utility model rights, securing exclusive,
//             high-performance technology.
//           </li>
//         </ul>
//         <ReviewBtn href="fire-starters" id={styles.btn} />
//       </div>
//     </section>
//   );
// };

// export default HomeFireStartersSection;

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