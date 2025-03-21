import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import React from 'react';
import styles from './HomeIgnitersSection.module.scss';

const HomeIgnitersSection = () => {
  return (
    <section className={`section ${styles.container}`}>
      <div className={` container ${styles.ignitersContent}`}>
        <h2 className={`sectionTitle ${styles.title}`}>Розпалювачі</h2>
        <ul className={styles.content}>
          <li>Легкозаймистий продукт</li>
          <li>У вигляді готових до використання рулонів із сухої деревини</li>
          <li>Для розпалювання вогню, пальників та барбекю</li>
        </ul>
        <ReviewBtn href="igniters" id={styles.btn} />
      </div>
    </section>
  );
};

export default HomeIgnitersSection;
