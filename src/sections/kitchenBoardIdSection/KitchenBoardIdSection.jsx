"use client";
import React from 'react';
import { useParams, useRouter } from "next/navigation";
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ItemSlider from '@/components/ItemSlider/ItemSlider';
import { productsData } from '@/data/productsData';
import styles from './KitchenBoardIdSection.module.scss';


const KitchenBoardIdSection = () => {
  const { slug } = useParams();
  const product = productsData.find( product => product.slug === slug);

  const router = useRouter(); 
  

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
          <p className={styles.description}>{product.longDescriptionEn}</p>
        </div>


      </div>
    </section>
  )
}


export default KitchenBoardIdSection