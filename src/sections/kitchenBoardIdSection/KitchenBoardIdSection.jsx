"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ItemSlider from '@/components/ItemSlider/ItemSlider';
import { productsData } from '@/data/productsData';
import { languagesData } from '@/data/languagesData';
import styles from './KitchenBoardIdSection.module.scss';


const KitchenBoardIdSection = () => {
  const { slug } = useParams();
  const product = productsData.find( product => product.slug === slug);

  const router = useRouter(); 
  
  const { i18n,t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);  
  useEffect(()=>{setIsLoading(false)},[]);
  

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BreadCrumbs 
          onClick={() => router.back()}
          title={!isLoading && t('Buttons.BackBtn')}
          externalClass={styles.backBtn}
        />
        <div className={styles.contentWrapper}>         
          <ItemSlider images={product?.images} customClass=''/> 
          <p className={styles.description}>{!isLoading && ((i18n.language === languagesData.DE) && product.longDescriptionDe) || ((i18n.language === languagesData.EN) && product.longDescriptionEn) || ((i18n.language === languagesData.ES) && product.longDescriptionEs) || ((i18n.language === languagesData.FR) && product.longDescriptionFr) || ((i18n.language === languagesData.IT) && product.longDescriptionIt) || product.longDescriptionUa}
          </p>
        </div>


      </div>
    </section>
  )
}


export default KitchenBoardIdSection