import React from 'react';
import styles from './HomeOakParquetSection.module.scss';
import Image from 'next/image';

const HomeOakParquetSection = () => {
  return (
    <section className={`section`}>
      <div className="container">
        <h2 className={`sectionTitle ${styles.title}`}>Oak parquet</h2>
        <div className={styles.content}>
          <ul className={styles.textContainer}>
            <li>Sustainability & Growth</li>
            <li>
              We source wood from FSC-certified forests, ensuring eco-friendly
              production and responsible forestry.
            </li>
            <li>To enhance global logistics, we are:</li>
            <li>
              Establishing an EU Company – Improving customer service and
              operations within Europe.
            </li>
            <li>
              Expanding EU Distribution – Setting up a warehouse in Poland for
              faster, cost-effective deliveries.
            </li>
          </ul>
          <figure className={styles.imgContainer}>
            <Image
              src="/png/OakParquet.png"
              alt="Паркет дубовий"
              fill={true}
              sizes="(max-width: 744px) 50%"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HomeOakParquetSection;
