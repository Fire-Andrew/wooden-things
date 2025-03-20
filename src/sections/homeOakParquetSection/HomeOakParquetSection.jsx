'use client';

import React from 'react';
import styles from './HomeOakParquetSection.module.scss';
import Image from 'next/image';
import { useWindowResize } from '@/hooks/windowResize';

const HomeOakParquetSection = () => {
  const { isMobile } = useWindowResize();
  return (
    <section className={`section`}>
      <div className="container">
        <h2 className={`sectionTitle ${styles.title}`}>Паркет дубовий</h2>
        <div className={styles.content}>
          {isMobile ? (
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Augue quis aliquet justo
              odio pretium vivamus arcu lobortis.
            </p>
          ) : (
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Augue quis aliquet justo
              odio pretium vivamus arcu lobortis. Netus faucibus curabitur
              tellus diam odio pulvinar eu. Lacus lectus ultrices faucibus nec
              lectus odio dictum. Non pretium nunc felis ultricies cras.
            </p>
          )}
          <figure className={styles.imgContainer}>
            <Image src="/png/OakParquet.png" alt="Паркет дубовий" fill={true} />
          </figure>
        </div>
        {isMobile && (
          <p className={styles.textBottom}>
            Lorem ipsum dolor sit amet consectetur. Augue quis aliquet justo
            odio pretium vivamus arcu lobortis. Netus faucibus curabitur tellus
            diam odio pulvinar eu. Lacus lectus ultrices faucibus nec lectus
            odio dictum. Non pretium nunc felis ultricies cras.
          </p>
        )}
      </div>
    </section>
  );
};

export default HomeOakParquetSection;
