import React from 'react';
import Image from 'next/image';
import styles from './HomeFurniturePanelsSection.module.scss';

const HomeFurniturePanelsSection = () => {
  return (
    <section className={`section`}>
      <div className={`container`}>
        <h2 className={`sectionTitle ${styles.title}`}>Furniture Panels</h2>
        <p className={styles.subtitle}>
          Its stunning natural wood texture makes it perfect for crafting
          elegant, high-quality furniture.
        </p>
        <div className={styles.content}>
          <figure className={styles.imgContainers}>
            <Image
              src="/webp/furniturePanels-laptop.webp"
              alt="Меблеві Щити"
              fill={true}
              sizes="(max-width: 743px) 95vw, (max-width: 1279px) 41vw, 496px"
              loading="lazy"
            />
          </figure>
          <div>
            {/* <h3 className={styles.accentText}>
              High-quality and durable material
            </h3> */}
            <p className={styles.text}>
              High-quality and durable material.
            </p>
            <p className={styles.text}>
              Premium & Durable – Built to last with exceptional strength.
            </p>
            <p className={styles.text}>
              Superior Adhesion – We exclusively use two-component German D4
              Kleiberit 304.1 glue, ensuring permanent, ultra-strong bonds that
              never separate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFurniturePanelsSection;
