import React from 'react';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import styles from './HomeFireStartersSection.module.scss';


const HomeFireStartersSection = () => {
  return (
    <section className={`section ${styles.container}`}>
      <div className={` container ${styles.ignitersContent}`}>
        <h2 className={`sectionTitle ${styles.title}`}>Fire Starters</h2>
        <ul className={styles.content}>
          <li>Flammable product</li>
          <li>In the form of ready-to-use rolls of dry wood</li>
          <li>For lighting fires, burners and barbecues</li>
        </ul>
        <ReviewBtn href="fire-starters" id={styles.btn} />
      </div>
    </section>
  );
};


export default HomeFireStartersSection;