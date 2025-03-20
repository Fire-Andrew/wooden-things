import React from 'react'
import styles from './IgnitersSection.module.scss'

const IgnitersSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={`sectionTitle ${styles.title}`}>Розпалювачі</h2>

      <div>
        <figure></figure>
        <div>
          <ul>
            <li className={styles.igniterPropertyList}>містять глибоко очищений віск - майже <span>не виділяють запаху та диму</span></li>
            <li className={styles.igniterPropertyList}>внутрішній отвір забезпечує <span>краще горіння</span></li>
            <li className={styles.igniterPropertyList}>мають привабливу форму та дизайн</li> 
          </ul>
        </div>
      </div>

      <div>
        <div>
          <ul>
            <li className={styles.igniterPropertyList}>не сипляться частини струж</li>
            <li className={styles.igniterPropertyList}>тривалість горіння - до <span>8-10 хв</span></li>
            <li className={styles.igniterPropertyList}>не липкі</li> 
          </ul>
        </div>
        <figure></figure>
      </div>

      <div>
        <figure></figure>
        <p className={styles.igniterPropertyText}><span>Пропонуємо</span> різні типи пакування по кількості штук в упаковці та за типом пакування </p>
      </div>

    </section>
  )
}

export default IgnitersSection