import React from 'react';
import Image from 'next/image';
import styles from './HomeFurniturePanelsSection.module.scss';

const HomeFurniturePanelsSection = () => {
  return (
    <section className={`section`}>
      <div className={`container`}>
        <h2 className={`sectionTitle ${styles.title}`}>Furniture Panels</h2>
        <p className={styles.subtitle}>
          It has a beautiful wood texture, so it is ideal for making beautiful
          furniture.
        </p>
        <div className={styles.content}>
          <figure className={styles.imgContainers}>
            <Image
              src="/webp/furniturePanels-laptop.webp"
              alt="Меблеві Щити"
              fill={true}
              sizes="(max-width: 768px) 50%"
            />
          </figure>
          <div>
            <h3 className={styles.accentText}>
              High-quality and durable material
            </h3>
            <p className={styles.text}>
              *The only type of glue we use is the two-component German glue D4
              Kleiberit 304.1. This is a guarantee that the joined surfaces will
              never come apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFurniturePanelsSection;
