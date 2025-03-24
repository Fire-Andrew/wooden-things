import React from 'react';
import styles from './HomeOakParquetSection.module.scss';
import Image from 'next/image';

const HomeOakParquetSection = () => {
  return (
    <section className={`section`}>
      <div className="container">
        <h2 className={`sectionTitle ${styles.title}`}>Oak parquet</h2>
        <div className={styles.content}>
          <p className={styles.textContainer}>
            Crafted from high-quality oak, our elegant and durable parquet
            flooring combines timeless beauty, strength, and precision—perfect
            for homes and commercial spaces.
          </p>
          <figure className={styles.imgContainer}>
            <Image
              src="/webp/OakParquet.webp"
              alt="Паркет дубовий"
              fill={true}
              sizes="(max-width: 743px) 95vw, (max-width: 1279px) 45vw, 580px"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeOakParquetSection;
