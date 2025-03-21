"use client";
import React from 'react';
import Image from 'next/image';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import { productsData } from '@/data/productsData';
import styles from './KitchenBoardsSection.module.scss';


const KitchenBoardsSection = () => {
 

  return (
    <section className={`section ${styles.section}`}>
      <div className='container'>
        <h2 className={`sectionTitle ${styles.title}`}>Дощечки</h2>

        <ul>
          {productsData.map((product) =>
            <li key={product.slug} className={styles.productCard}>
              <div className={styles.imgAndSizesWrap}>
                    <div className={styles.imgWrapper}>
                      <Image
                        className={styles.img}
                        src={product.images[0].src}
                        alt={product.images[0].src}
                        sizes="(max-width: 743px) 100vw, (max-width: 1279px) 50vw,   580px"
                        width={703}
                        height={468}
                      />
                    </div>
                    <p className={styles.sizes}>{product.sizes}</p>
              </div>

              <div className={styles.infoWrap}>
                  <p className={styles.description}>{product.descriptionUa}</p>        
                  <p className={styles.material}>Матеріал: {product.materialUa}</p>
                  <ReviewBtn href={`/kitchen-boards/${product.slug}`} id={styles.btn}/>
              </div>                   
          </li>)}
        </ul>
      </div>
    </section>
  )
}


export default KitchenBoardsSection