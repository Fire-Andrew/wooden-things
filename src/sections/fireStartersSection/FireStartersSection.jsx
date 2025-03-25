import React from 'react'
import Image from 'next/image';
import styles from './FireStartersSection.module.scss';


const FireStartersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
      <h2 className={`sectionTitle ${styles.sectionTitle}`}>Fire Starters</h2>

      <div className={styles.productContainer}>
        <figure className={styles.igniterImg}>
          <Image src="/images/lighter-igniter-pg.webp" 
            alt="fire starter"
            layout="fill"
            priority
            decoding="async" />
        </figure>
        <div className={styles.descContainerIgnitor}>
          <ul className={styles.igniterPropertyList}>
            <li>Clean, consistent flames.</li>
            <li>Perfect for fireplaces, grills, barbecues, and campfires.</li>
            <li>Refined Wax Formula – Minimal odor and smoke.</li>
            <li>Innovative Inner Hole Design – Ensures better airflow and efficient combustion.</li>
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersImg}>
          <Image src="/images/lighters-igniter-pg.webp" alt="fire starters" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitors}>
          <ul className={styles.igniterPropertyList}>
            <li>Attractive & Practical – A sleek shape with no loose chips or mess.</li>
            <li>Long Burn Time – Lasts 8–10 minutes.</li>
            <li>Non-Sticky & Easy to Handle.</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersPackImg}>
          <Image  src="/images/lightersPacked-igniter-pg.webp" alt="fire starters in pack" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitorsPack}>
          <p className={styles.igniterPropertyText}>We offer a variety of packaging options, customized by quantity and packaging type to suit your needs.</p>
        </div>
      </div>

      </div>
    </section>
  )
}

export default FireStartersSection;