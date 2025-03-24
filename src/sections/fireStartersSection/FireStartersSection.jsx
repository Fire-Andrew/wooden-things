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
          <Image src="/images/lighter-igniter-pg.webp" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitor}>
        <h3 className={styles.blockTitle}>Premium quality</h3>
          <ul className={styles.igniterPropertyList}>
            <li>contain deeply refined wax - almost <span>no odor and smoke</span></li>
            <li>inner hole provides <span>better combustion</span></li>
            <li>have an attractive shape and design</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersImg}>
          <Image src="/images/lighters-igniter-pg.webp" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitors}>
          <ul className={styles.igniterPropertyList}>
            <li>no chips fall out</li>
            <li>burning time - up to <span>8-10 minutes</span></li>
            <li>not sticky</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersPackImg}>
          <Image  src="/images/lightersPacked-igniter-pg.webp" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitorsPack}>
          <p className={styles.igniterPropertyText}><span>We offer</span> different types of packaging by the number of pieces in a package and by the type of packaging</p>
        </div>
      </div>

      <div className={styles.igniterInfoBlock}>
        <p>Made from <span>dry wood</span> shavings and purified wax, our chemical-free, eco-friendly fire starters burn for 8–10 minutes, ensuring strong, reliable ignition in any weather. We <span>hold patents</span> and utility model rights, securing exclusive, high-performance technology.</p>
      </div>

      </div>
    </section>
  )
}

export default FireStartersSection;