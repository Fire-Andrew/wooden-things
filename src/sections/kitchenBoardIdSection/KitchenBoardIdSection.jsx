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
  
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);  
  useEffect(()=>{setIsLoading(false)},[]);
  

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BreadCrumbs 
          onClick={() => router.back()}
          title='Back' 
          externalClass={styles.backBtn}
        />
        <div className={styles.contentWrapper}>         
          <ItemSlider images={product?.images} customClass=''/> 
          <p className={styles.description}>{!isLoading && ((i18n.language === languagesData.EN) && product.longDescriptionEn) || ((i18n.language === languagesData.DE) && product.longDescriptionDe) || product.longDescriptionUa}
          </p>
        </div>


      </div>
    </section>
  )
}


export default KitchenBoardIdSection