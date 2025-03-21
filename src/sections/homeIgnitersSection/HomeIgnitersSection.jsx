import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import React from 'react';
import styles from './HomeIgnitersSection.module.scss';

const HomeIgnitersSection = () => {
  return (
    <section className={`section ${styles.container}`}>
      <div className={` container ${styles.ignitersContent}`}>
        <h2 className={`sectionTitle ${styles.title}`}>Lighters</h2>
        <ul className={styles.content}>
          <li>Flammable product</li>
          <li>In the form of ready-to-use rolls of dry wood</li>
          <li>For lighting fires, burners and barbecues</li>
        </ul>
        <ReviewBtn href="igniters" id={styles.btn} />
      </div>
    </section>
  );
};

export default HomeIgnitersSection;
