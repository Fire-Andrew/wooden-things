import React from 'react'
import Image from 'next/image';
import styles from './IgnitersSection.module.scss'

const IgnitersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
      <h2 className={`sectionTitle ${styles.sectionTitle}`}>Розпалювачі</h2>

      <div className={styles.productContainer}>
        <figure className={styles.igniterImg}>
          <Image src="/png/lighter-igniter-pg.png" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitor}>
        <h3 className={styles.blockTitle}>Преміальна якість</h3>
          <ul className={styles.igniterPropertyList}>
            <li>містять глибоко очищений віск - майже <span>не виділяють запаху та диму</span></li>
            <li>внутрішній отвір забезпечує <span>краще горіння</span></li>
            <li>мають привабливу форму та дизайн</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersImg}>
          <Image src="/png/lighters-igniter-pg.png" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitors}>
          <ul className={styles.igniterPropertyList}>
            <li>не сипляться частини стружки</li>
            <li>тривалість горіння - до <span>8-10 хв</span></li>
            <li>не липкі</li> 
          </ul>
        </div>
      </div>

      <div className={styles.productContainer}>
        <figure className={styles.ignitersPackImg}>
          <Image  src="/png/lightersPacked-igniter-pg.png" alt="board" fill={true} />
        </figure>
        <div className={styles.descContainerIgnitorsPack}>
          <p className={styles.igniterPropertyText}><span>Пропонуємо</span> різні типи пакування по кількості штук в упаковці та за типом пакування </p>
        </div>
    
      </div>
      </div>
    </section>
  )
}

export default IgnitersSection