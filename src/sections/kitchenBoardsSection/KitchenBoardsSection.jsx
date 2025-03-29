"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import ReviewBtn from '@/components/ReviewBtn/ReviewBtn';
import { productsData } from '@/data/productsData';
import { languagesData } from '@/data/languagesData';
import styles from './KitchenBoardsSection.module.scss';


const KitchenBoardsSection = () => {
  const { i18n, t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);  
  useEffect(()=>{setIsLoading(false)},[]);
 

  return (
    <section className={`section ${styles.section}`}>
      <div className='container'>
        <h2 className={`sectionTitle ${styles.title}`}>{!isLoading && t('KitchenBoardsSection.Title')}</h2>

        <ul>
          {productsData.map((product) =>
            <li key={product.slug} className={styles.productCard}>
              <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={product.images[0].src}
                    alt={product.images[0].src}                    
                    sizes="(max-width: 743px) 95vw, (max-width: 1279px) 45vw, 580px"
                    width={703}
                    height={468}
                    priority={product.priority || false}
                  />
              </div>      

              <div className={styles.infoWrap}>
                <p className={styles.description}>{!isLoading && (((i18n.language === languagesData.DE) && product.descriptionDe) || ((i18n.language === languagesData.EN) && product.descriptionEn) || ((i18n.language === languagesData.ES) && product.descriptionEs) || ((i18n.language === languagesData.FR) && product.descriptionFr) || ((i18n.language === languagesData.IT) && product.descriptionIt) || product.descriptionUa)}</p>        
                  <ReviewBtn href={`/kitchen-boards/${product.slug}`}/>
              </div>                   
          </li>)}
        </ul>
      </div>
    </section>
  )
}


export default KitchenBoardsSection;