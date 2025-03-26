"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import styles from './ReviewBtn.module.scss';


const ReviewBtn = ({ href, id }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => setIsLoading(false), []);
  
  
  return (
    <Link href={href} className={styles.btn} id={id}>
      {!isLoading && t('Buttons.More')}
    </Link>
  );
};


export default ReviewBtn;